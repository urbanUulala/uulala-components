import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { StringTools } from '../utilities';
import { InputControlImgConfig } from '../models/configurations';
import { ImageTypes } from '../models/types';

@Component({
  selector: 'uul-img',
  templateUrl: './uul-img.component.html',
  styleUrls: ['./uul-img.component.scss']
})
export class UulImgComponent implements OnInit, AfterViewInit {

  //control config
  @Input() config: InputControlImgConfig = {
    id: StringTools.generateNewRandomString(12)
  };
  @Input() url: string = '';
  @Input() name: string = '';
  @Input() containerCss: string = '';
  @Input() imageCss: string = '';
  @Input() type: ImageTypes;

  containerElement: HTMLElement;
  imgElement: HTMLElement;

  constructor() { }

  ngOnInit(): void {

    console.log('on init image ', this.type)
  }

  ngAfterViewInit() {
    this.loadElements();
    this.loadStyles();
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

    if (this.url != '') this.imgElement.style.backgroundImage = `url("${this.url}")`;
  }
}
