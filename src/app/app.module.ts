import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherchildModule } from './fatherchild/fatherchild.module';
import { CutstringPipe } from './pipes/cutstring.pipe';
import { ZjczComponent } from './components/zjcz/zjcz.component';
import { SchoolComponent } from './components/school/school.component';
import { ClassComponent } from './components/school/class/class.component'


@NgModule({
  declarations: [
    AppComponent,
    CutstringPipe,
    ZjczComponent,
    SchoolComponent,
    ClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FatherchildModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
