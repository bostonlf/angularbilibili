import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '..';
import { State, todoFeatureKey } from '../reducers/todo.reducer';

//从ruducer里获取store里状态的名字，这个名字写在 reducer里
//<AppState,State>  存储的状态时是什么类型，获取的状态是什么类型的
export const selectTodo = createFeatureSelector<AppState,State>(todoFeatureKey);
export const selectTodos = createSelector(selectTodo,state=>state.Tasks)