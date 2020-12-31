import { Component, Input, OnInit } from '@angular/core';

//local files
import { StringTools } from '../utilities/string.tools';
import { ControlNumberSteps } from '../models/numberSteps';
@Component({
  selector: 'uul-steps',
  templateUrl: './uul-steps.component.html',
  styleUrls: ['./uul-steps.component.scss']
})
export class StepsComponent implements OnInit {


  @Input() step: ControlNumberSteps = 1;
  @Input() totalStep: number = 0;
  //Input styles
  @Input() containerCss: string = '';
  @Input() bgStepCss: string = '';

  steps = [];

  containerStyles:any = {
    'step-container': true
  }
  bgStepStyles:any = {
    'step-one__container-step-background': true
  }

  constructor() { }

  ngOnInit(): void {
    this.loadStyles();
  }

  loadStyles() {

    this.containerStyles[this.containerCss] = this.containerCss != '';
    this.bgStepStyles[this.bgStepCss] = this.bgStepCss != '';
    //dynamic count steps and show circles disable or enable
    for (let index = 0; index < this.totalStep; index++) {
      this.steps.push(this.step === index+1 ? true: false)
    }
  } 

}
