import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RadioBtnFormComponent } from './radio-btn-form/radio-btn-form.component';
import { SelectBtnFormComponent } from './select-btn-form/select-btn-form.component';
import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'radio',
    component: RadioBtnFormComponent
  },
  {
    path: 'select',
    component: SelectBtnFormComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/add',
    component: NewPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
