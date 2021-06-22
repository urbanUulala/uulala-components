import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UiService {
  private css_theme_class$ = new BehaviorSubject(null);

  constructor(

  ) { }

  setCssThemeClass(cssClass: string) {
    this.css_theme_class$.next(cssClass);
  }

  getCssThemeClass() {
    return this.css_theme_class$.asObservable();
  }

}
