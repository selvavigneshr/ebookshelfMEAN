import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { PostCreateComponent } from "./post-create/post-create.component";
import { PostListComponent } from "./post-list/post-list.component";

// import { FantacyComponent } from "../books/fantacy/fantacy.component";
import { AngularMaterialModule } from "../angular-material.module";
 import { AuthorComponent } from './author/author.component';
import { AuthorpublishComponent } from './authorpublish/authorpublish.component';
import { AdminpostComponent } from './adminpost/adminpost.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { LanguageComponent } from './language/language.component';
import { TamilComponent } from './tamil/tamil.component';
import { EnglishComponent } from './english/english.component';
import { MalayalamComponent } from './malayalam/malayalam.component';
import { TeluguComponent } from './telugu/telugu.component';
@NgModule({
  declarations: [PostCreateComponent, PostListComponent, AuthorComponent, AuthorpublishComponent, AdminpostComponent, MainhomeComponent, 
    MalayalamComponent, LanguageComponent, TamilComponent, EnglishComponent, TeluguComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class PostsModule {}
