import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { uulInputImg } from '../assets/uul-input.img';


import { SelectListItem } from '../models/configurations';
import { SelectTypes } from '../models/types';

@Component({
  selector: 'uul-select',
  templateUrl: './uul-select.component.html',
  styleUrls: ['./uul-select.component.scss']
})
export class UulSelectComponent implements OnInit, OnDestroy {

  // Subscription
  subscribesArray: Subscription[] = [];

  // control config
  @Input() label: string = '';
  @Input() values: SelectListItem[];
  @Input() type: SelectTypes = 'form';


  //reactive form
  @Input() control: AbstractControl = new FormControl();
  status:string = 'INVALID';

  //Input styles
  @Input() containerCss: string = '';
  @Input() inputCss: string = '';
  @Input() labelCss: string = '';

  // assets
  inputImages:any = uulInputImg;

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
    this.validateContent();
    this.subscribesArray.push(this.control.statusChanges.subscribe(result => {
      this.status = result;
    }));
  }

  ngOnDestroy() : void {
    this.subscribesArray.forEach( s => s.unsubscribe() )
  }

  validateContent() {
    setTimeout(() => {
      this.status = this.control.status;
    }, 100);
    
  }

}
