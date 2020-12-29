import { Component, Input, OnInit } from '@angular/core';
import { InputControlTextConfig } from '../models/configurations';
import { ControlTextTypes } from '../models/types';
import { StringTools } from '../utilities/string.tools';

//Constants
const defaultConfig: InputControlTextConfig = {
  id: StringTools.generateNewIdString(),
  formControlName: ''
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

  @Input() formControlName: string = '';
  //Input styles
  @Input() containerCss: string = '';
  @Input() inputCss: string = '';
  @Input() labelCss: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
