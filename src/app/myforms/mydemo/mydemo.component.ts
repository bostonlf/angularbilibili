import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mydemo',
  templateUrl: './mydemo.component.html',
  styles: [
  ]
})
export class MydemoComponent {
  onsubmit(myform:NgForm){
    console.log(myform)
  }
}
