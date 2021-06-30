import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";



import { InnerBiographyComponent } from "./books/biography/inner-biography/inner-biography.component"
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { GenreComponent } from "./genre/genre.component";
import {AdminComponent } from "./admin/admin.component";
import {HomeComponent } from "./home/home.component";
import {DashboardComponent } from "./dashboard/dashboard.component";
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

import { AppRoutingModule } from "./app-routing.module";
import { AuthInterceptor } from "./auth/auth-interceptor";
// import { AuthorAuthInterceptor } from "./author/author-auth-interceptor";
import { ErrorInterceptor } from "./error-interceptor";
import { ErrorComponent } from "./error/error.component";
import { AngularMaterialModule } from "./angular-material.module";
import { PostsModule } from "./posts/posts.module";
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
// import { AuthorRegisterComponent } from "./author/author-register/author-register.component";
// import { AuthorLoginComponent } from "./author/author-login/author-login.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GenreComponent,
    AdminComponent,
    // AuthorLoginComponent,
    AdventatureComponent,
    // AuthorLoginComponent,
    HomeComponent,
    FantacyComponent,
  
    FictionComponent,
    LiteraryComponent,
   
   //  AuthorRegisterComponent,
    // AuthorRegisterComponent,
    MysteryComponent,
    ScienceComponent,
    ChildrensComponent,
    BiographyComponent,
    InnerBiographyComponent,
    DashboardComponent ,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatSelectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PostsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthorAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}
