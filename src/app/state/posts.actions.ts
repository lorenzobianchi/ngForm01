import { Action } from '@ngrx/store';
import Post  from '../models/post.model'

export enum ActionTypes {
  GET_POSTS = '[Post] GET_POSTS',
  GET_POSTS_FAILURE = '[POST] GET_POSTS_FAILURE',
  GET_POSTS_SUCCESS = '[POST] GET_POSTS_SUCCESS'
}

export class GetPosts implements Action {
  readonly type = ActionTypes.GET_POSTS;
}

export class GetPostsFailure implements Action {
  readonly type = ActionTypes.GET_POSTS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class GetPostsSuccess implements Action {
  readonly type = ActionTypes.GET_POSTS_SUCCESS;
  constructor(public payload: { items: Post[] }) {}
}

export type Actions = GetPosts | GetPostsFailure | GetPostsSuccess
