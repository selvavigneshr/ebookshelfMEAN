import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { environment } from "../../environments/environment";
import { Post } from "./post.model";
import { AuthRoutingModule } from "../auth/auth-routing.module";
import { GenreComponent } from "../genre/genre.component";
import { NgFormSelectorWarning } from "@angular/forms";

const BACKEND_URL = environment.apiUrl + "/posts/";



@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<{ posts: Post[];  }>();
  private genre: Post[] = [];
  private genreUpdated = new Subject<{ posts: Post[];  }>();
  private genrefiction: Post[] = [];
  private genrefictionUpdated = new Subject<{ posts: Post[];  }>();
  private genrechildren: Post[] = [];
  private genrechildrenUpdated = new Subject<{ posts: Post[];  }>();
  private genrescience: Post[] = [];
  private genrescienceUpdated = new Subject<{ posts: Post[];  }>();
  private genreaction: Post[] = [];
  private genreactionUpdated = new Subject<{ posts: Post[];  }>();
  private genrebiography: Post[] = [];
  private genrebiographyUpdated = new Subject<{ posts: Post[];  }>();
  private genremystery: Post[] = [];
  private genremysteryUpdated = new Subject<{ posts: Post[];  }>();
  private genreliterary: Post[] = [];
  private genreliteraryUpdated = new Subject<{ posts: Post[];  }>();
  private languagetamil: Post[] = [];
  private languagetamilUpdated = new Subject<{ posts: Post[];  }>();
  private languageenglish: Post[] = [];
  private languageenglishUpdated = new Subject<{ posts: Post[];  }>();
  private languagemalayalam: Post[] = [];
  private languagemalayalamUpdated = new Subject<{ posts: Post[];  }>();
  private languagetelugu: Post[] = [];
  private languageteluguUpdated = new Subject<{ posts: Post[];  }>();
  constructor(private http: HttpClient, private router: Router) {}
  getPosts() {
    this.http
      .get<{ message: string; posts: any; }>(
        BACKEND_URL 
      )
      .pipe(
        map(postData => {
          return {
            posts: postData.posts.map(post => {
              return {
                title: post.title,
                content: post.content,
                language: post.language,
                genre: post.genre,
                author: post.author,
                imagePath: post.imagePath,
                bookPath: post.bookPath,
                id: post._id,
                creator: post.creator
              };
            }),
          };
        })
      )
      .subscribe(transformedPostData => {
        this.posts = transformedPostData.posts;
        this.postsUpdated.next({
          posts: [...this.posts]
        });
      });
  }

  getGenres() {
    this.http
      .get<{ message: string; posts: any;  }>(
        BACKEND_URL + "getGenres"
      )
      .pipe(
        map(postData => {
          console.log(postData);
          return {
            genre: postData.posts.map(post => {
              return {
                title: post.title,
                content: post.content,
                language: post.language,
                genre: post.genre,
                author: post.author,
                imagePath: post.imagePath,
                bookPath: post.bookPath,
                id: post._id,
                creator: post.creator
              };
            }),
          };
        })
      )
      .subscribe(transformedPostData => {
        this.genre = transformedPostData.genre;
        this.genreUpdated.next({
          posts: [...this.genre]
        });
      });
  }

  getGenresFiction() {
    this.http
      .get<{ message: string; posts: any;  }>(
        BACKEND_URL + "getGenresFiction"
      )
      .pipe(
        map(postData => {
          console.log("Helooooooooooooooooooooooooooooo", postData);
          return {
            genrefiction: postData.posts.map(post => {
              return {
                title: post.title,
                content: post.content,
                language: post.language,
                genre: post.genre,
                author: post.author,
                imagePath: post.imagePath,
                bookPath: post.bookPath,
                id: post._id,
                creator: post.creator
              };
            }),
          };
        })
      )
      .subscribe(transformedPostData => {
        console.log(transformedPostData);
        this.genrefiction = transformedPostData.genrefiction;
        this.genrefictionUpdated.next({
          posts: [...this.genrefiction]
        });
      });
    }

    getGenreschildren() {
      this.http
        .get<{ message: string; posts: any;  }>(
          BACKEND_URL + "getGenreschildren"
        )
        .pipe(
          map(postData => {
            console.log("Helooooooooooooooooooooooooooooo", postData);
            return {
              genrechildren: postData.posts.map(post => {
                return {
                  title: post.title,
                  content: post.content,
                  language: post.language,
                  genre: post.genre,
                  author: post.author,
                  imagePath: post.imagePath,
                  bookPath: post.bookePath,
                  id: post._id,
                  creator: post.creator
                };
              }),
            };
          })
        )
        .subscribe(transformedPostData => {
          console.log(transformedPostData);
          this.genrechildren = transformedPostData.genrechildren;
          this.genrechildrenUpdated.next({
            posts: [...this.genrechildren]
          });
        });
      }

      getGenresscience() {
        this.http
          .get<{ message: string; posts: any;  }>(
            BACKEND_URL + "getGenresscience"
          )
          .pipe(
            map(postData => {
              console.log("Helooooooooooooooooooooooooooooo", postData);
              return {
                genrescience: postData.posts.map(post => {
                  return {
                    title: post.title,
                    content: post.content,
                    language: post.language,
                    genre: post.genre,
                    author: post.author,
                    imagePath: post.imagePath,
                    bookPath: post.bookPath,
                    id: post._id,
                    creator: post.creator
                  };
                }),
              };
            })
          )
          .subscribe(transformedPostData => {
            console.log(transformedPostData);
            this.genrescience = transformedPostData.genrescience;
            this.genrescienceUpdated.next({
              posts: [...this.genrescience]
            });
          });
        }

        getGenresaction() {
          this.http
            .get<{ message: string; posts: any;  }>(
              BACKEND_URL + "getGenresaction"
            )
            .pipe(
              map(postData => {
                console.log("Helooooooooooooooooooooooooooooo", postData);
                return {
                  genreaction: postData.posts.map(post => {
                    return {
                      title: post.title,
                      content: post.content,
                      language: post.language,
                      genre: post.genre,
                      author: post.author,
                      imagePath: post.imagePath,
                      bookPath: post.bookPath,
                      id: post._id,
                      creator: post.creator
                    };
                  }),
                };
              })
            )
            .subscribe(transformedPostData => {
              console.log(transformedPostData);
              this.genreaction = transformedPostData.genreaction;
              this.genreactionUpdated.next({
                posts: [...this.genreaction]
              });
            });
          }

          getGenrebiography() {
            this.http
              .get<{ message: string; posts: any;  }>(
                BACKEND_URL + "getGenrebiography"
              )
              .pipe(
                map(postData => {
                  console.log("Helooooooooooooooooooooooooooooo", postData);
                  return {
                    genrebiography: postData.posts.map(post => {
                      return {
                        title: post.title,
                        content: post.content,
                        language: post.language,
                        genre: post.genre,
                        author: post.author,
                        imagePath: post.imagePath,
                        bookPath: post.bookPath,
                        id: post._id,
                        creator: post.creator
                      };
                    }),
                  };
                })
              )
              .subscribe(transformedPostData => {
                console.log(transformedPostData);
                this.genrebiography = transformedPostData.genrebiography;
                this.genrebiographyUpdated.next({
                  posts: [...this.genrebiography]
                });
              });
            }

            getGenremystery() {
              this.http
                .get<{ message: string; posts: any;  }>(
                  BACKEND_URL + "getGenremystery"
                )
                .pipe(
                  map(postData => {
                    console.log("Helooooooooooooooooooooooooooooo", postData);
                    return {
                      genremystery: postData.posts.map(post => {
                        return {
                          title: post.title,
                          content: post.content,
                          language: post.language,
                          genre: post.genre,
                          author: post.author,
                          imagePath: post.imagePath,
                          bookPath: post.bookPath,
                          id: post._id,
                          creator: post.creator
                        };
                      }),
                    };
                  })
                )
                .subscribe(transformedPostData => {
                  console.log(transformedPostData);
                  this.genremystery = transformedPostData.genremystery;
                  this.genremysteryUpdated.next({
                    posts: [...this.genremystery]
                  });
                });
              }
              getGenreliterary() {
                this.http
                  .get<{ message: string; posts: any;  }>(
                    BACKEND_URL + "getGenreliterary"
                  )
                  .pipe(
                    map(postData => {
                      console.log("Helooooooooooooooooooooooooooooo", postData);
                      return {
                        genreliterary: postData.posts.map(post => {
                          return {
                            title: post.title,
                            content: post.content,
                            language: post.language,
                            genre: post.genre,
                            author: post.author,
                            imagePath: post.imagePath,
                            bookPath: post.bookPath,
                            id: post._id,
                            creator: post.creator
                          };
                        }),
                      };
                    })
                  )
                  .subscribe(transformedPostData => {
                    console.log(transformedPostData);
                    this.genreliterary = transformedPostData.genreliterary;
                    this.genreliteraryUpdated.next({
                      posts: [...this.genreliterary]
                    });
                  });
                }

  getLanguageTamil() {
    this.http
      .get<{ message: string; posts: any;  }>(
        BACKEND_URL + "getLanguageTamil"
      )
      .pipe(
        map(postData => {
          console.log(postData);
          return {
            languagetamil: postData.posts.map(post => {
              return {
                title: post.title,
                content: post.content,
                language: post.language,
                genre: post.genre,
                author: post.author,
                imagePath: post.imagePath,
                bookPath: post.bookPath,
                id: post._id,
                creator: post.creator
              };
            }),
          };
        })
      )
      .subscribe(transformedPostData => {
        this.languagetamil = transformedPostData.languagetamil;
        this.languagetamilUpdated.next({
          posts: [...this.languagetamil]
        });
      });
  }
   
  
  getLanguageEnglish() {
    this.http
      .get<{ message: string; posts: any;  }>(
        BACKEND_URL + "getLanguageEnglish"
      )
      .pipe(
        map(postData => {
          console.log(postData);
          return {
            languageenglish: postData.posts.map(post => {
              return {
                title: post.title,
                content: post.content,
                language: post.language,
                genre: post.genre,
                author: post.author,
                imagePath: post.imagePath,
                bookPath: post.bookPath,
                id: post._id,
                creator: post.creator
              };
            }),
          };
        })
      )
      .subscribe(transformedPostData => {
        this.languageenglish = transformedPostData.languageenglish;
        this.languageenglishUpdated.next({
          posts: [...this.languageenglish]
        });
      });
  }
  getLanguageMalayalam() {
    this.http
      .get<{ message: string; posts: any;  }>(
        BACKEND_URL + "getLanguageMalayalam"
      )
      .pipe(
        map(postData => {
          console.log(postData);
          return {
            languagemalayalam: postData.posts.map(post => {
              return {
                title: post.title,
                content: post.content,
                language: post.language,
                genre: post.genre,
                author: post.author,
                imagePath: post.imagePath,
                bookPath: post.bookPath,
                id: post._id,
                creator: post.creator
              };
            }),
          };
        })
      )
      .subscribe(transformedPostData => {
        this.languagemalayalam = transformedPostData.languagemalayalam;
        this.languagemalayalamUpdated.next({
          posts: [...this.languagemalayalam]
        });
      });
  }

  getLanguageTelugu() {
    this.http
      .get<{ message: string; posts: any;  }>(
        BACKEND_URL + "getLanguageTelugu"
      )
      .pipe(
        map(postData => {
          console.log(postData);
          return {
            languagetelugu: postData.posts.map(post => {
              return {
                title: post.title,
                content: post.content,
                language: post.language,
                genre: post.genre,
                author: post.author,
                imagePath: post.imagePath,
                bookPath: post.bookPath,
                id: post._id,
                creator: post.creator
              };
            }),
          };
        })
      )
      .subscribe(transformedPostData => {
        this.languagetelugu = transformedPostData.languagetelugu;
        this.languageteluguUpdated.next({
          posts: [...this.languagetelugu]
        });
      });
  }
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
  getgenreUpdateListener() {
    return this.genreUpdated.asObservable();
  }

  getgenrefictionUpdatedListener() {
    return this.genrefictionUpdated.asObservable();
  }
  getgenrechildrenUpdatedListener() {
    return this.genrechildrenUpdated.asObservable();
  }
  getgenrescienceUpdatedListener() {
    return this.genrescienceUpdated.asObservable();
  }
  getgenreactionUpdatedListener() {
    return this.genreactionUpdated.asObservable();
  }
  getgenrebiographyUpdatedListener() {
    return this.genrebiographyUpdated.asObservable();
  }
  getgenremysteryUpdatedListener() {
    return this.genremysteryUpdated.asObservable();
  }
  getgenreliteraryUpdatedListener() {
    return this.genreliteraryUpdated.asObservable();
  }
  getlanguagetamilUpdatedListener() {
    return this.languagetamilUpdated.asObservable();
  }
  getlanguageenglishUpdatedListener() {
    return this.languageenglishUpdated.asObservable();
  }
  getlanguagemalayalamUpdatedListener() {
    return this.languagemalayalamUpdated.asObservable();
  }
  getlanguageteluguUpdatedListener() {
    return this.languageteluguUpdated.asObservable();
  }
  getPost(id: string) {
    return this.http.get<{
      _id: string;
      title: string;
      content: string;
      language : string;
      genre : string;
      author :string;
      imagePath: string;
      bookPath: string;
      creator: string;

    }>(BACKEND_URL + id);
  }

  addPost(title: string, content: string, language: string,genre: string, author: string,image: File ,pdf: File )  {
    const pdfData = new FormData();
    console.log(pdf);
    pdfData.append("image",pdf,title);

    const postData = new FormData();
    postData.append("title", title);
    postData.append("content", content);
    postData.append("language", language);
    postData.append("genre", genre);
    postData.append("author", author);
    postData.append("image", image, title);

    this.http
      .post<{ message: string; post: Post }>(
        BACKEND_URL,
        postData
      )
      .subscribe(responseData => {
        this.http
      .put(BACKEND_URL +"/bookpath/"+responseData.post.id, pdfData)
      .subscribe(response => {
        console.log(response);
      });

     //   this.router.navigate(["/"]);
      });
  }

  updatePost(id: string, title: string, content: string, language: string, 
    genre: string,author: string, image: File | string) {
    let postData: Post | FormData;
    let image_temp:any;
    image_temp=image
    if (typeof image === "object"  ) {
      postData = new FormData();
      postData.append("id", id);
      postData.append("title", title);
      postData.append("content", content);
      postData.append("language",language);
      postData.append("genre",genre);
      postData.append("author",author);
      postData.append("image", image, title);

    } else {
      postData = {
        id: id,
        title: title,
        content: content,
        language: language,
        genre: genre,
        author: author,
        imagePath: image,
        bookPath: image,
        creator: null
      };
    }
    
  
    this.http
      .put(BACKEND_URL + id, postData)
      .subscribe(response => {
        this.router.navigate(["/"]);
      });
  }

  deletePost(postId: string) {
    return this.http.delete(BACKEND_URL + postId);
  }
}
