import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { InputControlImgConfig } from '../models/configurations';
import { ImageTypes } from '../models/types';
import { StringTools } from '../utilities';



@Component({
  selector: 'uul-img-background',
  templateUrl: './uul-img-background.component.html',
  styleUrls: ['./uul-img-background.component.scss']
})
export class UulImgBackgroundComponent implements OnInit, AfterViewInit {

  //control config
  @Input() config: InputControlImgConfig = {
    id: StringTools.generateNewRandomString(12)
  };
  @Input() url: string = '';
  @Input() children: string = '';
  @Input() containerCss: string = '';
  @Input() imageCss: string = '';
  @Input() type: ImageTypes;
  @Input() imgWidth: string = '280';
  @Input() imgHeight: string = '120';

  containerElement: HTMLElement;
  imgElement: HTMLElement;

  constructor() { }

  ngOnInit(): void {
      console.log('on init image ', this.type, this.url)
      this.loadStyles();

  }

  ngAfterViewInit() {
    this.loadElements();
    if (this.url != '' && this.url !== null) this.imgElement.style.backgroundImage = `url("${this.url}")`
  }

  loadElements() {
    this.containerElement = document.getElementById(`${this.config.id}-container`);
    this.imgElement = document.getElementById(`${this.config.id}-img`);
  }

  loadStyles() {
    if (this.containerCss != '') {
      this.containerCss.split(' ').forEach(cssClass => {
        this.containerElement.classList.add(cssClass);
      });
    }
    if (this.imageCss != '') {
      this.imageCss.split(' ').forEach(cssClass => {
        this.imgElement.classList.add(cssClass);
      });
    }

    // if (this.url != '' && this.url !== null) this.imgElement.style.backgroundImage = `url("${this.url}")`;
  }

  reloadImg(url: string, children: string = '') {
    if(this.imgElement) {
      this.loadElements();
      this.url = url;
      if (this.url != '' && this.url !== null) this.imgElement.style.backgroundImage = `url("${this.url}")`;
    }
    else {
      this.url = '';
      this.children = children
    }
  }

  getSideNavBarStyle() {
    let imageBgStyle: any = {};
    imageBgStyle.width = this.imgWidth + 'px';
    imageBgStyle.height = this.imgHeight + 'px';
    imageBgStyle.background= this.url
    return imageBgStyle;
  }
}
