import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, fromEvent,map } from 'rxjs';
import { AppState } from './store';
import { addTodo } from './store/actions/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit,AfterViewInit {
@ViewChild('AddTodoIput') AddTodoIput!:ElementRef
  constructor(private store:Store<AppState>){//先把store弄进来，然后这个store的类型就是我们定义的 AppState


  }

  title = 'angular-bili';
  mymessage:string = 'this is my message';
  htmlString:string ="<h1>This html</h1>";
  myfn = ()=>{
    return "this is a function."
  } 
   divtitle = "mytitle";
   imgurl = "https://imgs.ali213.net/IndexTJ/2023/02/05/20230205101249508.jpg";
   mytrue = true;
   myred:string = "green";
   myclickbutton = (e:Event)=>{
    console.log(e)
    alert("button clicked");
   }
   onkeyup = (e:Event)=>{
    console.log(1111)
    console.log(e.target)
   }

   getmybutton = (mybuttondom:ElementRef<HTMLButtonElement>)=>{
    console.log(mybuttondom)
   }
 
   myclick(button:any){
    console.log(button)
   }

   ngOnInit(): void {
    const arraya = [2, 5, 9];
    arraya.splice(1, 1);
    console.log(arraya)
   }

   ngAfterViewInit(): void {
     fromEvent<KeyboardEvent >(this.AddTodoIput.nativeElement,"keyup").pipe(
      filter(event=>event.key=="Enter"),
      map(event=>((<HTMLInputElement>event.target).value)),
      map(title=>title.trim()),
      filter((title)=>title!=="")
     ).subscribe(title=>{
      this.store.dispatch(addTodo({title}))
      this.AddTodoIput.nativeElement.value = ""
     })
   }

}
