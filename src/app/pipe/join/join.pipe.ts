import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
})
export class JoinPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const ar = [];
    value.map(item => {
      ar.push(item.name);
    });
    return ar.join('/');
  }
}
