import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { uiQueries } from '../queries/ui.queries';
import { GraphService } from './graph.service';




@Injectable({
  providedIn: 'root'
})
export class UiService {
  private css_theme_class$ = new BehaviorSubject(null);

  constructor(
    private graphService: GraphService
  ) { }

  setCssThemeClass(cssClass: string) {
    this.css_theme_class$.next(cssClass);
  }

  getCssThemeClass() {
    return this.css_theme_class$.asObservable();
  }

  getBrandInfo(id: number) {
    return this.graphService.execQuery(
      uiQueries.GET_BRAND_INFO,
      {
        id
      }
    ).pipe(
      map(result => {
        // console.log('brand info', result);
        return {
          ...result.data['getBrandCompany'],
          brandeo: JSON.parse(result.data['getBrandCompany'].brandeo)
        }
      })
    )
  }

}
