import { Component, Input, OnInit } from '@angular/core';
import { AccountModel } from '../models/getters/account.model';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'uul-user',
  templateUrl: './uul-user.component.html',
  styleUrls: ['./uul-user.component.scss']
})
export class UulUserComponent implements OnInit {

  @Input() userProfile: AccountModel;
  @Input() urlAccounts: string;
  @Input() buttonText: string = 'My account';
  showDetail:boolean = true;
  userId:string;

  constructor(
    private localService: LocalService
  ) { }

  ngOnInit(): void {
    this.userId = this.localService.getValue( 'uid' );
  }

  changeToggle(event) {
    this.showDetail = event;
  }

  goToAccounts() {
    this.localService.redirectToAccounts(this.urlAccounts);
  }

}
