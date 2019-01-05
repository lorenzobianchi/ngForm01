import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { NewPostComponent } from '../new-post/new-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'add',
    component: NewPostComponent
  }
]


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ PostsComponent, NewPostComponent ]
})
export class PostsModule { }
