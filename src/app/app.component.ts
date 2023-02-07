import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';



interface person {
  location?:{
    sheng:string
  }
}

interface Classmates {
  name:string,
  age:number,
  xuhao:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .obb {background-color:black}
  .dansh {background-color:pink}
  `]
})
export class AppComponent implements AfterViewInit{

  @ViewChild("aabbb") aabbb:ElementRef<HTMLParagraphElement> | undefined

  title = 'angular-bili';
  clickbutton = function(originDom:any){
    alert("xxxx");
    console.log(originDom)
  }

  ngAfterViewInit(){
    console.log(this.aabbb?.nativeElement.innerHTML)
  }
  //双向数据绑定
  myformvalue:string="init";
  changemodel(){
    this.myformvalue = "newdata";
  }

  person:person = {}
  //指令
  directTrue:boolean = true;
  changeDirectbool(){
    this.directTrue = !this.directTrue;
  }

  mymates:Classmates[]=[
    {name:"xiaohong",age:22,xuhao:2},
    {name:"xiaoming",age:44,xuhao:5},
    {name:"芳芳",age:88,xuhao:9},
  ]

  uniqueItem=function(index:number,item:Classmates){
    return item.xuhao
  }

  mydate = new Date()
}
