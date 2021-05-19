import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCardDate'
})
export class FormatCardDatePipe implements PipeTransform {

  transform(date: string, separator: string = '/'): string {
    let dateLeft: string = date.split('/')[0];
    let dateRigth: string = date.split('/')[1];

    return `${this.formatPartialDate(dateLeft)}${separator}${this.formatPartialDate(dateRigth)}`;
  }

  formatPartialDate(date: string) {
    let output: string;
    switch (date.length) {
      case 1:
        output = `0${date}`
        break;
      case 2:
        output = date;
        break;
      case 3:
        output = `${date.substring(1, 3)}`
      case 4:
        output = `${date.substring(2, 4)}`
      default:
        output = '00';
        break;
    }
  }

}
