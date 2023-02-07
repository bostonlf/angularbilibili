import { Component, EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})

export class ChildComponent implements OnInit {
  @Output() sendData = new EventEmitter();

  childSendMSGtoFather(msg:string){
      console.log("msg:"+msg)
      this.sendData.emit("msg");
  }
  ngOnInit(): void {}
}
