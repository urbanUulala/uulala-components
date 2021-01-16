import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'uul-check',
  templateUrl: './uul-check.component.html',
  styleUrls: ['./uul-check.component.scss']
})
export class UulCheckComponent implements OnInit {
  //control config
  @Input() label:string = '';

  //reactive form
  @Input() control: AbstractControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
