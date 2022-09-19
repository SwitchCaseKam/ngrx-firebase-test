import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.state";

const actionTag = '[Posts]'

export const add = createAction(`${actionTag} add`, props<{post: Post}>());
export const remove = createAction(`${actionTag} remove`, props<{index: number}>());
export const update = createAction(`${actionTag} update`, props<{post: Post}>());