import { Component, Input, OnInit } from '@angular/core';
import { TransactionsConfig } from '../models/config/transactionsConfig.model';

@Component({
  selector: 'lib-uul-transactions',
  templateUrl: './uul-transactions.component.html',
  styleUrls: ['./uul-transactions.component.scss']
})
export class UulTransactionsComponent implements OnInit {

  @Input() config: TransactionsConfig; 

  constructor() { }

  ngOnInit(): void {
  }

}
