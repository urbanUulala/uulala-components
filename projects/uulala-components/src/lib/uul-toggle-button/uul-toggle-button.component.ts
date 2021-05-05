import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'uul-toggle-button',
  templateUrl: './uul-toggle-button.component.html',
  styleUrls: ['./uul-toggle-button.component.scss']
})
export class UulToggleButtonComponent implements OnInit {

  @Input() value:boolean;
  @Output() changeEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.value = !this.value;
    this.changeEvent.emit(this.value);
  }

}
