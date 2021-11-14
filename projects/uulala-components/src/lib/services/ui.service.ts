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

  getBrandInfo( version:string) {
    let versionStorage:string = this.localService.getStorage('version');
    // console.log('versions data', version, versionStorage, version !== versionStorage)
    let brandInfo: BrandModel = this.localService.getStorageType<BrandModel>( 'brand' );
    let company: number = +this.localService.getStorage('company');

    if(versionStorage !== version) {
      this.localService.setStorageHours('version', version, 672)
      brandInfo = null;
    }

    if(company !== +brandInfo?.id) brandInfo = null;



    // console.log('brand info', brandInfo)

    if(brandInfo) return of(brandInfo);
    
    if(!brandInfo) return this.graphService.execQuery(
      uiQueries.GET_BRAND_INFO,
      {
        id: +this.localService.getStorage('company')
      }
    ).pipe(
      map(result => {
        brandInfo = {
          ...result.data['getBrandCompany'],
          brandeo: JSON.parse(result.data['getBrandCompany'].brandeo)
        }
        this.localService.setStorageHours('brand', JSON.stringify(brandInfo), 240)
        return brandInfo;
      })
    )
  }

  getCounter(iterationTime:number, iterationsNumber:number = 0) {
    return iterationsNumber === 0 ? interval(iterationTime * 1000): interval(iterationTime * 1000).pipe(take(iterationsNumber))
  }

}
