import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-image',
  templateUrl: './icon-image.component.html',
  styleUrls: ['./icon-image.component.scss']
})
export class IconImageComponent implements OnInit {
  @Input() inputImage:string;

  constructor() { }

  ngOnInit(): void {

  }

}
