import { NgModule } from '@angular/core';
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
    RouterModule.forChild(routes)
  ]
})
export class PostsRoutingModule { }
