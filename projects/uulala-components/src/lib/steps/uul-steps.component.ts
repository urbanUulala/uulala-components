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
  @Input() blue;
  //Input styles
  @Input() containerCss: string = '';
  @Input() bgStepCss: string = '';

  // Tipe la variable como arreglo numerico para guardar los steps
  steps:number[] = [];
  onPress: any = {};
  blueState: boolean =false
  containerStyles:any = {
    'step-container': true
  }
  
  bgStepStyles:any = {
    'step-one__container-step-background': true
  }

  bgStepStylesBlue:any = {
    'step-one__container-step-blue': true
  }

  constructor() { }

  ngOnInit(): void {
    this.loadStyles();
    this.loadData();
  }

  loadStyles() {
    this.blueState = this.blue ===''? true: false
    this.bgStepStyles = !this.blueState? this.bgStepStyles: this.bgStepStylesBlue;
    this.containerStyles[this.containerCss] = this.containerCss != '';
    this.bgStepStyles[this.containerCss] = this.containerCss != '';
  }

  loadData() {
    //dynamic count steps and show circles disable or enable
    for (let index = 1; index <= this.totalStep; index++) {
      this.steps.push(index);
    }
  }

}
