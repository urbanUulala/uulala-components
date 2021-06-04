import { Pipe, PipeTransform } from '@angular/core';
import { StringTools } from '../utilities';


@Pipe({
  name: 'systemBalance'
})
export class SystemBalance implements PipeTransform {

  transform(balance: string, hide: boolean = false): string {
    return hide ? balance.replace(/[0-9]/g, "*") : balance;
  }
}
