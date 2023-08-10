import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publicCase'
})
export class PublicCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {    
    return value == "(?)" ? "?" : value;
  }

}
