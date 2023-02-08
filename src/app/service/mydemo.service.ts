import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';

@Injectable({
  providedIn: AppModule
})
export class MydemoService {
  tmpService:string = "init service value."
  constructor() { }
}
