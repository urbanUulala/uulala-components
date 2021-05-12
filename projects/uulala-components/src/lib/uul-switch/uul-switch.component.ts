import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { uulInputImg } from '../assets/uul-input.img';


@Component({
  selector: 'uul-switch',
  templateUrl: './uul-switch.component.html',
  styleUrls: ['./uul-switch.component.scss']
})
export class UulSwitchComponent implements OnInit {

  assetsImage:any = uulInputImg;

  //reactive form
  @Input() control: AbstractControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

  change() {

  }

}
