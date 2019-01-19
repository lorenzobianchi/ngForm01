import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RadioBtnFormComponent } from './radio-btn-form/radio-btn-form.component';
import { SelectBtnFormComponent } from './select-btn-form/select-btn-form.component';
import { ClockComponent } from './clock/clock.component';

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
    path: 'clock',
    component: ClockComponent
  },
  {
    path: 'posts',
    loadChildren: './posts/posts.module#PostsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
