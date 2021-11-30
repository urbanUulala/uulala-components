import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-image',
  templateUrl: './icon-image.component.html',
  styleUrls: ['./icon-image.component.scss']
})
export class IconImageComponent implements OnInit {
  @Input() inputImage:string;
  @Input() widthSvg: number = 13;
  @Input() heigthSvg: number = 0;
  @Input() fill:string = 'var(--color-white)';

  constructor() { }

  ngOnInit(): void {

  }

}