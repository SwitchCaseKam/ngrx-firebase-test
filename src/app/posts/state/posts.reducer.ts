import { createReducer, on } from "@ngrx/store";
import { add, remove, update } from "./posts.actions";
import { Post, PostState } from "./posts.state";

const initialState: PostState = {
    postsList: [
        {id: 1, author: 'kam', title: 'init post', content: 'test text'},
        {id: 2, author: 'kazzz', title: 'second article', content: 'loren ipsum'}
    ]
};

export const postsReducer = createReducer(
    initialState,
    on(add, (state: PostState, action) => {
        const post = {...action.post} as Post;
        const index = (state.postsList.slice(-1).pop()?.id ?? 0) + 1;
        post.id = index;
        return { 
            ...state,
            postsList: [...state.postsList, post]
        }
    }),
    on(remove, (state: PostState, action) => {
        return { 
            ...state,
            postsList: state.postsList.filter(p => p.id !== action.index)
        }
    }),
    on(update, (state: PostState, action) => {
        const post = {...action.post} as Post;
        console.log('post reducer: ', post)
        console.log('state.postsList: ', state.postsList)
        const updatedPosts = state.postsList.map((p: Post) => {
            return p.id === action.post.id ? post : p;
        });
        return { 
            ...state,
            postsList: updatedPosts
        }
    }),
);