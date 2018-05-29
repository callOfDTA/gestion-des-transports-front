import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let date = new Date(value);
    return `${date.getHours()}h:${date.getMinutes()}min - ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  }

}
