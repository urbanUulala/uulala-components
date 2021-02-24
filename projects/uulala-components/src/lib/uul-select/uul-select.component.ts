import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

import { SelectListItem } from '../models/configurations';
import { SelectTypes } from '../models/types';

@Component({
  selector: 'uul-select',
  templateUrl: './uul-select.component.html',
  styleUrls: ['./uul-select.component.scss']
})
export class UulSelectComponent implements OnInit {

  // control config
  @Input() label: string = '';
  @Input() values: SelectListItem[];
  @Input() type: SelectTypes = 'form';


  //reactive form
  @Input() control: AbstractControl = new FormControl();

  //Input styles
  @Input() containerCss: string = '';
  @Input() inputCss: string = '';
  @Input() labelCss: string = '';


  //local variables
  containerStyles:any = {
    'control-container': true
  }
  inputStyles:any = {
    'control-select': true
  }
  labelStyles:any = {
    'control-label-select': true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
