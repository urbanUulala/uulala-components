import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'uul-label',
  templateUrl: './uul-label.component.html',
  styleUrls: ['./uul-label.component.scss']
})
export class UulLabelComponent implements OnInit {
  //control config
  @Input() tittle:string = '';
  @Input() description:string = '';

  //Input styles
  @Input() containerCss: string = '';
  @Input() tittleCss: string = '';
  @Input() descriptionCss: string = '';

  //local variables
  containerStyles:any = {
    'label-container': true
  };

  tittleStyles:any = {
    'tittle-label': true
  }
  descriptionStyles:any = {
    'description-label': true
  }

  constructor() { }

  ngOnInit(): void {
    this.loadStyles();
  }

  loadStyles() {
    this.containerStyles[this.containerCss] = this.containerCss != '';
    this.tittleStyles[this.tittleCss] = this.tittleCss != '';
    this.descriptionStyles[this.descriptionCss] = this.descriptionCss != '';
  }

}
