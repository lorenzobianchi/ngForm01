import { Actions, ActionTypes } from './posts.actions';
import { featureAdapter, initialState, State } from './posts-state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.GET_POSTS: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.GET_POSTS_SUCCESS: {
      return featureAdapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.GET_POSTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}
