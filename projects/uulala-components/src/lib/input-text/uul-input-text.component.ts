import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

//local files
import { StringTools } from '../utilities/string.tools';
import { ControlTextTypes } from '../models/types';
import { InputControlTextConfig } from '../models/configurations';
import { Subscription } from 'rxjs';
import { StyleTools } from '../utilities';

@Component({
  selector: 'uul-input-text',
  templateUrl: './uul-input-text.component.html',
  styleUrls: ['./uul-input-text.component.scss']
})
export class UulInputTextComponent implements OnInit, AfterViewInit, OnDestroy {
  //control config
  @Input() config: InputControlTextConfig = {
    id: StringTools.generateNewRandomString(12)
  };
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

  //HTMLElements
  containerElement: HTMLElement;
  labelElement: HTMLElement;
  inputElement: HTMLElement;

  // observers
  containerElement$: Subscription;
  value$: Subscription;


  containerStyles: any = {
    'control-container': true
  }
  inputStyles: any = {
    'control-input': true
  }
  labelStyles: any = {
    'control-label': true,
    'control-label-focus': false
  }


  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.loadStyles();
    this.validateContent();
    this.loadElements();
    this.value$ = this.control.valueChanges.subscribe(result => this.validateContent());
  }

  ngOnDestroy() {
    this.value$.unsubscribe();
  }

  loadStyles() {
    this.containerStyles[this.containerCss] = this.containerCss != '';
    this.inputStyles[this.inputCss] = this.inputCss != '';
    this.labelStyles[this.labelCss] = this.labelCss != '';
  }

  loadElements() {
    this.containerElement = document.getElementById(`${this.config.id}-container`);
    this.labelElement = document.getElementById(`${this.config.id}-label`);
    this.inputElement = document.getElementById(`${this.config.id}-input`);
  }

  selected() {
    this.inputElement.focus();
  }

  validateContent() {
    this.labelStyles['control-label-focus'] = this.control.value != '';
    this.labelStyles['control-label'] = this.control.value == '';
  }

}
