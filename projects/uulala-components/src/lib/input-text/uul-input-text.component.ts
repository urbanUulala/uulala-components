import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

//local files
import { StringTools } from '../utilities/string.tools';
import { ControlTextTypes } from '../models/types';
import { InputControlTextConfig } from '../models/configurations';
import { Subscription } from 'rxjs';
import { uulInputImg } from '../assets/uul-input.img';
import { CapitalizeTypes } from '../types/capitalize.type';
import { DateTools } from '../utilities/date.tools';




@Component({
  selector: 'uul-input-text',
  templateUrl: './uul-input-text.component.html',
  styleUrls: ['./uul-input-text.component.scss']
})
export class UulInputTextComponent implements OnInit, AfterViewInit, OnDestroy {
  // Subscriptions
  subscriptions: Subscription[] = [];

  //control config
  @Input() config: InputControlTextConfig = {
    id: StringTools.generateNewRandomString(12)
  };
  @Input() type: ControlTextTypes = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';

  @Input() minValue: number = 0;
  @Input() maxValue: number = 0;
  @Input() showErrorMessage: boolean = false;
  @Input() labelErrorMessage: string;
  @Input() trimValue: boolean = false;

  //reactive form
  @Input() control: AbstractControl = new FormControl();

  //Input styles
  @Input() containerCss: string = '';
  @Input() inputCss: string = '';
  @Input() labelCss: string = '';
  @Input() capitalizeType: CapitalizeTypes = 'none';

  //local variables
  showPassword: boolean = false;
  status:string = 'INVALID';

  //HTMLElements
  containerElement: HTMLElement;
  labelElement: HTMLElement;
  inputElement: HTMLElement;

  // observers
  containerElement$: Subscription;
  value$: Subscription;
  status$: Subscription;

  // assets
  inputImages:any = uulInputImg;


  containerStyles: any = {
    'control-container': true
  }
  inputStyles: any = {
    'control-input': true,
    'normal-text': true
  }
  labelStyles: any = {
    'control-label': true,
    'control-label-focus': false
  }




  constructor() { }

  ngOnInit(): void { 
    switch (this.type) {
      case 'date':  
        let date: Date = new Date(this.control.value);
        this.control.setValue(DateTools.dateToYMD(date))       
        break;
    
      default:
        break;
    }
  }

  ngAfterViewInit() {
    this.loadStyles();
    this.validateContent();
    this.loadElements();
    this.value$ = this.control.valueChanges.subscribe(val => {
      this.validateContent();
      this.status = this.control.status;
    });
    this.status$ = this.control.statusChanges.subscribe(result => {
      // console.log('text status', result);
      this.status = result;
    });

    if(this.trimValue) this.subscriptions.push(
      this.control.valueChanges.subscribe( value => {
        // console.log('event clean', value);
        this.control.setValue(value.trim(), {emitEvent:false} )
      })
    )

    this.status$.unsubscribe();
  }

  ngOnDestroy() {
    this.value$.unsubscribe();
    this.status$.unsubscribe();
    this.subscriptions.forEach(s => s.unsubscribe());
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

    setTimeout(() => {
      this.status = this.control.status;
      // else this.status = '';
    }, 100);
    
  }
  
}
