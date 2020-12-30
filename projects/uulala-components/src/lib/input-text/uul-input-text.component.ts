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

  //private variables
  private showPassword:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
