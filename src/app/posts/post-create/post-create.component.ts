import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";

import { PostsService } from "../posts.service";
import { Post } from "../post.model";
import { mimeType } from "./mime-type.validator";
import { mimeTypepdf } from "./mime-type.validatorpdf";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit, OnDestroy {
  enteredTitle = "";
  enteredContent = "";
  post: Post;
  isLoading = false;
  form: FormGroup;
  imagePreview: string;
  private mode = "create";
  private postId: string;
  private authStatusSub: Subscription;
  bookPreview: string;

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
      language: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
     
      genre: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      author: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      }),
      pdf: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = "edit";
        this.postId = paramMap.get("postId");

        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe(postData => {
          this.isLoading = false;
          console.log(postData);
          this.post = {
            id: postData._id,
            title: postData.title,
            content: postData.content,
            language: postData.language,
            genre: postData.genre,
            author: postData.author,
            imagePath: postData.imagePath,
            bookPath: postData.bookPath,
            creator: postData.creator  
          };
          this.form.setValue({
            title: this.post.title,
            content: this.post.content,
            language: this.post.language,
            genre: this.post.genre,
            author: this.post.author,
            image: this.post.imagePath,
            pdf: this.post.bookPath
          });
        });
      } else {
        this.mode = "create";
        this.postId = null;
      }
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
   
    reader.readAsDataURL(file);
  };
  
  onpdfPicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ pdf: file });
    this.form.get("pdf").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.bookPreview = reader.result as string;
    };
   
    reader.readAsDataURL(file);
  };
 

  onSavePost() {
   
   if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.postsService.addPost(
        this.form.value.title,
        this.form.value.content,
        this.form.value.language,
        this.form.value.genre,
        this.form.value.author,
        this.form.value.image,
        this.form.value.pdf
      );
    } else {
      this.postsService.updatePost(
        this.postId,
        this.form.value.title,
        this.form.value.content,
        
        this.form.value.language,
        this.form.value.genre,
        this.form.value.author,
        this.form.value.image
       

      );   
    }    
     console.log(this.form.value.image,this.form.value.pdf);
    this.form.reset();
  }   

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
