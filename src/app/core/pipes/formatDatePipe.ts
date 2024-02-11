import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'formatDate',
  standalone: true,
})
export class FormatDatePipe implements PipeTransform {
  transform(value: any): any {
    const parsedDate = new Date(value);

    if (!isNaN(parsedDate.getTime())) {
      const datePipe = new DatePipe('en-US');
      return datePipe.transform(parsedDate, 'HH:mm:ss MMM dd yyyy');
    }

    return value;
  }
}
