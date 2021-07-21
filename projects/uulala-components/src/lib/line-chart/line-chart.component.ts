import { Component, Input, OnInit } from '@angular/core';
import { interpolationTypes } from '../types/interpolation.type';
import * as shape from 'd3-shape';

@Component({
  selector: 'lib-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() data: any[];
  @Input() view: any[] = [700, 270];

  // options
  @Input() legend: boolean = false;
  @Input() showLabels: boolean = true;
  @Input() animations: boolean = true;
  @Input() xAxis: boolean = false;
  @Input() yAxis: boolean = true;
  @Input() showYAxisLabel: boolean = false;
  @Input() showXAxisLabel: boolean = true;
  @Input() xAxisLabel: string = '';
  @Input() yAxisLabel: string = '';
  @Input() timeline: boolean = true;
  @Input() curve:interpolationTypes  = 'Cardinal';
  @Input()  showGridLines:boolean = true;
  @Input() roundDomains:boolean = true;
  @Input() colorScheme = {
    domain: ['var(--color-success)', 'var(--color-error)']
  };

  constructor() { }

  ngOnInit(): void {
  }

  curves = {
    Basis: shape.curveBasis,
    'Basis Closed': shape.curveBasisClosed,
    Bundle: shape.curveBundle.beta(1),
    Cardinal: shape.curveCardinal,
    'Cardinal Closed': shape.curveCardinalClosed,
    'Catmull Rom': shape.curveCatmullRom,
    'Catmull Rom Closed': shape.curveCatmullRomClosed,
    Linear: shape.curveLinear,
    'Linear Closed': shape.curveLinearClosed,
    'Monotone X': shape.curveMonotoneX,
    'Monotone Y': shape.curveMonotoneY,
    Natural: shape.curveNatural,
    Step: shape.curveStep,
    'Step After': shape.curveStepAfter,
    'Step Before': shape.curveStepBefore,
    default: shape.curveLinear
  }

}
