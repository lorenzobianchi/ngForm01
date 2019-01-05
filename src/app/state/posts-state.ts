import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import  Post from '../models/post.model';

export const featureAdapter: EntityAdapter<
  Post
> = createEntityAdapter<Post>({
  selectId: model => model.id,
  sortComparer: (a: Post, b: Post): number =>
    b.author.toString().localeCompare(a.author.toString())
});

export interface State extends EntityState<Post> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
