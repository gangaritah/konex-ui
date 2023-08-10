import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorStatus'
})
export class ColorStatusPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {    
    return value == "Error" ? "red" : "green";
  }


}
