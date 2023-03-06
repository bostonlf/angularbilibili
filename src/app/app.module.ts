import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherchildModule } from './fatherchild/fatherchild.module';
import { CutstringPipe } from './pipes/cutstring.pipe';
import { ZjczComponent } from './components/zjcz/zjcz.component';
import { SchoolComponent } from './components/school/school.component';
import { ClassComponent } from './components/school/class/class.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { DirectiveModule } from './directive/directive.module'; 
import { TodolistModule } from './modules/todolist/todolist.module';

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
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    DirectiveModule,
    TodolistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
