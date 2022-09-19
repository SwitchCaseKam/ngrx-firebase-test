import { createAction, props } from "@ngrx/store";

const actionTag = '[Counter]'

export const increment = createAction(`${actionTag} increment`);
export const decrement = createAction(`${actionTag} decrement`);
export const reset = createAction(`${actionTag} reset`);
export const pow = createAction(`${actionTag} pow`, props<{n: number}>());
export const sqrt = createAction(`${actionTag} sqrt`);