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

  // Tipe la variable como arreglo numerico para guardar los steps
  steps:number[] = [];

  containerStyles:any = {
    'step-container': true
  }
  bgStepStyles:any = {
    'step-one__container-step-background': true
  }

  constructor() { }

  ngOnInit(): void {
    this.loadStyles();
    this.loadData();
  }

  loadStyles() {
    this.containerStyles[this.containerCss] = this.containerCss != '';
    this.bgStepStyles[this.bgStepCss] = this.bgStepCss != '';
  }

  // Hice una funcion para carga de datos
  loadData() {
    //dynamic count steps and show circles disable or enable
    // Guarde el step en tipo numerico para poder compararlo con el step seleccionado
    for (let index = 1; index <= this.totalStep; index++) {
      this.steps.push(index);
    }
  }

}
