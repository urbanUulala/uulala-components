import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'uul-menu-buttons',
  templateUrl: './uul-menu-buttons.component.html',
  styleUrls: ['./uul-menu-buttons.component.scss']
})
export class UulMenuButtonsComponent implements OnInit {

  //Input styles
  @Input() containerCss: string = '';
  @Input() bgCss: string = '';
  @Input() textButton: string = '';
  @Input() imageButton: string = '';


  // Tipe la variable como arreglo numerico para guardar los steps
  onPress: any = {};

  containerStyles:any = {
    'conatinerButton': true
  }
  
  bgButtonStyles:any = {
    'buttonBackground': true
  }

  constructor() { }


  ngOnInit(): void {
    this.loadStyles();
  }

  loadStyles() {
    
    this.containerStyles[this.containerCss] = this.containerCss != '';
    this.bgButtonStyles[this.bgCss] = this.bgCss != '';
  }
}