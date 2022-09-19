import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postsReducer } from "../posts/state/posts.reducer";
import { PostState } from "../posts/state/posts.state";

export interface AppState {
    counter: CounterState,
    posts: PostState
}

export const reducers: ActionReducerMap<AppState> = {
    counter: counterReducer,
    posts: postsReducer
};

export const selectCounter = (state: AppState) => state.counter.value;

export const selectAllPosts = (state: AppState) => state.posts.postsList;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];