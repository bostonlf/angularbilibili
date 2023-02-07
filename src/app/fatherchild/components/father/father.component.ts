import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styles: [
  ]
})
export class FatherComponent {
  getData(event:string){
    console.log("alert from father:"+event)
  }
}
