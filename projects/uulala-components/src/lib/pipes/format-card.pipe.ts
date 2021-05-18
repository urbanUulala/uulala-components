import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCard'
})
export class FormatCardPipe implements PipeTransform {

  transform(cardNumber: string, ...args: unknown[]): unknown {
    return `${cardNumber.substring(0,4)}-${cardNumber.substring(4,8)}-${cardNumber.substring(8,12)}-${cardNumber.substring(12,16)}`;
  }

}
