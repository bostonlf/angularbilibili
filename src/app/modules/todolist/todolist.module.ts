import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './components/todolist/todolist.component';



@NgModule({
  declarations: [
    TodolistComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TodolistComponent
  ]
})
export class TodolistModule { }
