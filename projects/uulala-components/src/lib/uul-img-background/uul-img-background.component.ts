import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { InputControlImgConfig } from '../models/configurations';
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
  @Input() imgWidth: string = '280';
  @Input() imgHeight: string = '120';
  imgElement: HTMLElement;

  constructor() { }

  ngOnInit(): void {
 
  }

  ngAfterViewInit() {
    this.loadElements();
    if (this.url != '' && this.url !== null) this.imgElement.style.backgroundImage = `url("${this.url}")`
  }

  loadElements() {
    this.imgElement = document.getElementById(`${this.config.id}-img`);
  }


  getSideNavBarStyle() {
    let imageBgStyle: any = {};
    imageBgStyle.width = this.imgWidth + 'px';
    imageBgStyle.height = this.imgHeight + 'px';
    imageBgStyle.background= this.url
    return imageBgStyle;
  }
}
