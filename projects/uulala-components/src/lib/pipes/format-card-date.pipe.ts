import { Pipe, PipeTransform } from '@angular/core';
import { StringTools } from '../utilities';


@Pipe({
  name: 'formatCardDate'
})
export class FormatCardDatePipe implements PipeTransform {

  transform(date: string, separator: string = '/'): string {
    return StringTools.formatDateCard(date, separator);
  }
}
