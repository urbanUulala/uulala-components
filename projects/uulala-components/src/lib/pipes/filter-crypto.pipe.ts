// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterCrypto' })

export class FilterCryptoPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText?.toLocaleLowerCase();
    return items.filter(it => {
      return  it?.amount?.toString().includes(searchText) ||
       it?.name?.toLocaleLowerCase().includes(searchText) ||
       it?.short_name.toLocaleLowerCase().includes(searchText);
    });
  }
}