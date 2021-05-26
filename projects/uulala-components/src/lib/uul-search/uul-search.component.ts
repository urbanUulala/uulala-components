import { Component, OnInit,Input } from '@angular/core';
import { uulInputImg } from '../assets/uul-input.img';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'uul-search',
  templateUrl: './uul-search.component.html',
  styleUrls: ['./uul-search.component.scss']
})
export class UulSearchComponent implements OnInit {

  @Input() label:string = '';
  assetsImage:any = uulInputImg;

  //reactive form
  @Input() search: AbstractControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
