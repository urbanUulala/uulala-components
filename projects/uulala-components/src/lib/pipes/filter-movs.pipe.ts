// filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterMovs implements PipeTransform {
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
    console.log('searchText',searchText);
    return items.filter(it => {
      console.log('it',it)
      return  it?.amount?.toString().includes(searchText) ||
       it?.note?.noteDescription.toLocaleLowerCase().includes(searchText) ||
       it?.transactionDate.toLocaleLowerCase().includes(searchText);
    });
  }
}