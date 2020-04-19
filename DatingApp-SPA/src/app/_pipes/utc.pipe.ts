import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'utc'
})
export class UtcPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  transform(value: any): any {
    value = this.datePipe.transform(value.replace('Z', ''), 'short');
    return new Date(value + ' UTC');
  }
}
