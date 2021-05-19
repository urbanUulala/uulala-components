import { Pipe, PipeTransform } from '@angular/core';
import { FormatCardTypes } from '../models/types';


@Pipe({
  name: 'formatCard'
})
export class FormatCardPipe implements PipeTransform {

  transform(cardNumber: string, type:FormatCardTypes = 'all', separator:string = ' '): string {
    
    switch (type) {
      case 'last-four-off':
        return `****${separator}****${separator}****${separator}${cardNumber.substring(12,16)}`;  
      case 'last-four': 
        return cardNumber.substring(12,16);
      case 'all':
        return `${cardNumber.substring(0,4)}${separator}${cardNumber.substring(4,8)}${separator}${cardNumber.substring(8,12)}${separator}${cardNumber.substring(12,16)}`;
    }
  }

}