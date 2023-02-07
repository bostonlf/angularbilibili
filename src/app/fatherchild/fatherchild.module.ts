import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FatherComponent } from './components/father/father.component';
import { ChildComponent } from './components/child/child.component';



@NgModule({
  declarations: [
    FatherComponent,
    ChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[FatherComponent]
})
export class FatherchildModule { }
