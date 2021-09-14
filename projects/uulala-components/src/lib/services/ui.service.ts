import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { BrandModel } from '../models/getters/brand.model';
import { LocalService } from '../services/local.service';
import { uiQueries } from '../queries/ui.queries';
import { GraphService } from './graph.service';




@Injectable({
  providedIn: 'root'
})
export class UiService {
  private css_theme_class$ = new BehaviorSubject(null);

  constructor(
    private graphService: GraphService,
    private localService: LocalService
  ) { }

  setCssThemeClass(cssClass: string) {
    this.css_theme_class$.next(cssClass);
  }

  getCssThemeClass() {
    return this.css_theme_class$.asObservable();
  }

  getBrandInfo(id: number) {

    let brandInfo: BrandModel = this.localService.getStorageType<BrandModel>( 'brand' );

    // console.log('brand info', brandInfo)

    if(brandInfo) return of(brandInfo);
    
    if(!brandInfo) return this.graphService.execQuery(
      uiQueries.GET_BRAND_INFO,
      {
        id
      }
    ).pipe(
      map(result => {
        brandInfo = {
          ...result.data['getBrandCompany'],
          brandeo: JSON.parse(result.data['getBrandCompany'].brandeo)
        }
        this.localService.setStorageHours('brand', JSON.stringify(brandInfo), 120)
        return brandInfo;
      })
    )
  }

  getCounter(iterationTime:number, iterationsNumber:number = 0) {
    return iterationsNumber === 0 ? interval(iterationTime * 1000): interval(iterationTime * 1000).pipe(take(iterationsNumber))
  }

}
