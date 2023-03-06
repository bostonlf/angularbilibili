import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store,select } from '@ngrx/store';
import { filter, fromEvent,map,Observable } from 'rxjs';
import { addTask } from 'src/app/store/actions/todo.actions';
import { selectTodos } from 'src/app/store/selector/todo.selectors';
import { AppState } from '../../../../store/index'
import { Task } from '../../../../store/reducers/todo.reducer'


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styles: [
  ]
})
export class TodolistComponent implements AfterViewInit{
  todos:Observable<Task[]>
  @ViewChild('Todoaddtask') Todoaddtask!:ElementRef 
  constructor(private store : Store<AppState>){  //单例模式，store是Store的实例，拥有Store里reducer和state的关系
    this.todos = this.store.pipe(select(selectTodos))
  }

  ngAfterViewInit(): void {
    fromEvent<KeyboardEvent>(this.Todoaddtask.nativeElement,"keyup").pipe(
      filter(event=>event.key=="Enter"),
      map(event=>((<HTMLInputElement>event.target).value)),
      map(title=>title.trim()),
      filter(title=>title!=="")
      ).subscribe((title)=>{
        this.store.dispatch(addTask({title}));
        this.Todoaddtask.nativeElement.value=""
    })
  }

}
