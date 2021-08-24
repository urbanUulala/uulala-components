import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-change-buttons',
  templateUrl: './change-buttons.component.html',
  styleUrls: ['./change-buttons.component.scss']
})
export class ChangeButtonsComponent implements OnInit {

  @Output() upEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() downEvent:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  up() {
    this.upEvent.emit(true);
  }

  down() {
    this.downEvent.emit(true);
  }

}
