import { createAction, props } from '@ngrx/store';

//add task
export const addTask = createAction(
  'addTask',
  props<{title:string}>()
);

//delete task
export const deleteTask = createAction(
  'deleteTask',
  props<{id:string}>()
);


