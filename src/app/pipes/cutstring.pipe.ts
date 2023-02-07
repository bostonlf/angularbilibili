import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutstring'//管道的名字，用这个名字来使用管道
})
export class CutstringPipe implements PipeTransform {
//transform 是固定写法，实际就是用来出来传过来的参数的function
//第一个参数是传过来的值，就是要更改的原始值，
  transform(value: string, cutnumber?:number,...args: unknown[]): string {//这里参数的类型自定义，返回值类型也自定义
    console.log(value);
    console.log(cutnumber+"@@"+JSON.stringify(args))
    return value.substring(0,cutnumber)//这里需要有返回值，不如管道失效
  }

}
