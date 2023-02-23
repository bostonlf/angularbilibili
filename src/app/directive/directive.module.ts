import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberinputDirective } from './numberinput.directive';
 
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NumberinputDirective],
  exports:[ // 使引用该模块的类可以使用该指令
    NumberinputDirective
  ]
})
export class DirectiveModule { }