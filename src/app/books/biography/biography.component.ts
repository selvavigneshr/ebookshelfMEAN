import { Component, OnInit } from '@angular/core';
import { PageEvent } from "@angular/material";
import { Subscription } from "rxjs";

import { Post } from "../../posts/post.model";
import { PostsService } from "../../posts/posts.service";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {

  posts: Post[] = [];
  isLoading = false;
  totalPosts = 0;
  postsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  userId: string;
  private postsSub: Subscription;
  private authStatusSub: Subscription;
  constructor(
    public postsService: PostsService,
    private authService: AuthService
  ) { }
  ngOnInit() {
    this.isLoading = true;
    this.postsService. getGenrebiography();
    this.userId = this.authService.getUserId();
    this.postsSub = this.postsService
      .getgenrebiographyUpdatedListener()
      .subscribe((postData: { posts: Post[];  }) => {
        this.isLoading = false;
        this.posts = postData.posts;
        console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii' + this.posts[0].id);
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });
  }
  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.postsService.getPosts();

  }

  onDelete(postId: string) {
    this.isLoading = true;
    this.postsService.deletePost(postId).subscribe(() => {
      this.postsService.getPosts();
    }, () => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

}