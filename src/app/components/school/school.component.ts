import { Component } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styles: [
  ]
})
export class SchoolComponent {
  shcoolGetData(event:string){
alert("shcool get class MSG"+event)
  }
}
