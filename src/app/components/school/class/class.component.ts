import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: [
  ]
})
export class ClassComponent {
  @Output() sendData = new EventEmitter();
  classClick(){
    console.log("classClick");
    this.sendData.emit("classMSG");
  }
}
