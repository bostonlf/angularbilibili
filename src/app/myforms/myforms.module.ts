import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MydemoComponent } from './mydemo/mydemo.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    MydemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MydemoComponent]
})
export class MyformsModule { }
