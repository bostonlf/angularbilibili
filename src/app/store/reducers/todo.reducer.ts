import { Action, createReducer, on } from '@ngrx/store';
import { addTask, deleteTask } from '../actions/todo.actions';
import { v4 as uuidv4 } from 'uuid';


export const todoFeatureKey = 'todo';

export interface Task {
  id:string,
  title:string
}

export interface State {
  Tasks:Task[];
}

export const initialState: State = {
  Tasks:[]
};

export const reducer = createReducer(
  initialState,
on(addTask,(state,actions)=>({
  ...state,
  Tasks:[
    {
      id:uuidv4(),
      title:actions.title
    }
  ]
})),
on(deleteTask,(state,actions)=>{
  let newState:State = JSON.parse(JSON.stringify(state));
  const taskindex:number = newState.Tasks.findIndex((item)=>(item.id === actions.id))
  newState.Tasks.splice(taskindex,1)
  return newState
})
);
