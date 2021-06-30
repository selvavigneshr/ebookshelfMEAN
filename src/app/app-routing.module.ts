import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { AuthorComponent } from "./posts/author/author.component";
import {AdminpostComponent } from "./posts/adminpost/adminpost.component";
import {LanguageComponent } from "./posts/language/language.component";
// import { MainhomeComponent } from './posts/mainhome/mainhome.component';
import { TamilComponent } from './posts/tamil/tamil.component';
import { EnglishComponent } from './posts/english/english.component';
import { MalayalamComponent } from './posts/malayalam/malayalam.component';
import { TeluguComponent } from './posts/telugu/telugu.component';
import { AdminComponent } from "./admin/admin.component";
import {GenreComponent}  from "./genre/genre.component";
// import {HomeComponent}  from "./home/home.component";
import {DashboardComponent}  from "./dashboard/dashboard.component";
import { AuthGuard } from "./auth/auth.guard";
import {HomeComponent}  from "./home/home.component";
import { InnerBiographyComponent } from "./books/biography/inner-biography/inner-biography.component"
import {FantacyComponent } from "./books/fantacy/fantacy.component";
import {FictionComponent } from "./books/fiction/fiction.component";
import {AdventatureComponent } from "./books/adventature/adventature.component";
import {LiteraryComponent } from "./books/literary/literary.component";
import {MysteryComponent } from "./books/mystery/mystery.component";

import {ScienceComponent } from "./books/science/science.component";
import {ChildrensComponent } from "./books/childrens/childrens.component";
import {BiographyComponent } from "./books/biography/biography.component";



// import {AuthorRegisterComponent } from "./author/author-register/author-register.component";

// import {AuthorLoginComponent } from "./author/author-login/author-login.component";
// import { AuthorRegisterComponent } from "./author/author-register/author-register.component";
// import { AuthorLoginComponent } from "./author/author-login/author-login.component";

const routes: Routes = [
  { path: "list", component: PostListComponent },
  { path: "genre", component: GenreComponent },
  { path: "admin", component: AdminComponent },
  { path: "fantacy", component: FantacyComponent },
  { path: "adventature", component: AdventatureComponent },
  { path: "fiction", component: FictionComponent },
  { path: "literary", component:LiteraryComponent },
  { path: "mystery", component: MysteryComponent },
  { path: "language", component: LanguageComponent },
  { path: "science", component: ScienceComponent  },
  { path: "childrens", component: ChildrensComponent },
  { path: "biography", component: BiographyComponent},
  { path: "tamil", component: TamilComponent},
  { path: "english", component: EnglishComponent},
  { path: "malayalam", component: MalayalamComponent},
  { path: "telugu", component: TeluguComponent},
  // { path: "authorpublish", component:AuthorpublishComponent},
  { path: "biographyinner", component: InnerBiographyComponent},
  // { path: "authorlogin", component: AuthorLoginComponent},
  // { path: "authorregister", component: AuthorRegisterComponent},
  { path: "dashboard", component: DashboardComponent , canActivate: [AuthGuard] },
  // { path: "", component: MainhomeComponent },
  { path: "", component: HomeComponent },
  { path: "author", component: AuthorComponent },
  { path: "adminpost", component: AdminpostComponent  },
  { path: "admin", component: AdminpostComponent  },
 // { path: "author", component: AuthorComponent },
  { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "edit/:postId", component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule"}
 // { path: "authorauth", loadChildren: "./author/author-auth.module#AuthorAuthModule"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
