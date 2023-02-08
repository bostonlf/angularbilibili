import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';



interface person {
  location?:{
    sheng:string
  }
}

interface Classmates {
  name:string,
  age:number,
  xuhao:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .obb {background-color:black}
  .dansh {background-color:pink}
  `]
})
export class AppComponent{
  AppComponentStr:any = "AppComponent"

}
