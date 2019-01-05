import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RadioBtnFormComponent } from './radio-btn-form/radio-btn-form.component';
import { SelectBtnFormComponent } from './select-btn-form/select-btn-form.component';
import { ApiService } from './services/api.service';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    RadioBtnFormComponent,
    SelectBtnFormComponent,
    PostsComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
