import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

//local files
import { StringTools } from '../utilities/string.tools';
import { ControlTextTypes } from '../models/types';
import { InputControlTextConfig } from '../models/configurations';

//Constants
const defaultConfig: InputControlTextConfig = {
  id: StringTools.generateNewIdString()
};

@Component({
  selector: 'uul-input-text',
  templateUrl: './uul-input-text.component.html',
  styleUrls: ['./uul-input-text.component.scss']
})
export class UulInputTextComponent implements OnInit {
  //control config
  @Input() config: InputControlTextConfig = defaultConfig;
  @Input() type: ControlTextTypes = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';

  //reactive form
  @Input() control: AbstractControl = new FormControl();


  //Input styles
  @Input() containerCss: string = '';
  @Input() inputCss: string = '';
  @Input() labelCss: string = '';

  //local variables
  showPassword: boolean = false;

  containerStyles:any = {
    'control-container': true
  }
  inputStyles:any = {
    'control-input': true
  }
  labelStyles:any = {
    'control-label': true
  }


  constructor() { }

  ngOnInit(): void {
    this.loadStyles();
  }

  loadStyles() {
    this.containerStyles[this.containerCss] = this.containerCss != '';
    this.inputStyles[this.inputCss] = this.inputCss != '';
    this.labelStyles[this.labelCss] = this.labelCss != '';
  }

}
