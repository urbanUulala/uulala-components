import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TransactionsConfig } from '../models/config/transactionsConfig.model';

@Component({
  selector: 'lib-uul-transactions',
  templateUrl: './uul-transactions.component.html',
  styleUrls: ['./uul-transactions.component.scss']
})
export class UulTransactionsComponent implements OnInit {

  @Input() config: TransactionsConfig; 
  @Input() showBorder: boolean = true;
  @Input() showTittle: boolean = true;
  @Input() setHeigth:number;
  @Input() labelSearch: string = 'Search';
  @Input() showSearch:boolean = true;

  @Output() detailEvent: EventEmitter<any> = new EventEmitter<any>();

  searchControl: AbstractControl = new FormControl();
  subscriptions: Subscription[] = [];



  constructor() { }

  ngOnInit(): void {
    this.subscriptions.push(this.searchControl.valueChanges.subscribe(result => {

    }))
  }

  execSendDataColumn(data:any) {
    this.detailEvent.emit(data) 
  }

}
