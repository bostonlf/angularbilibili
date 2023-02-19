import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
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

}
