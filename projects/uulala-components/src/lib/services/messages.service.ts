import { Injectable } from '@angular/core';
import Swal, { SweetAlertPosition } from 'sweetalert2';
import { ErrorModel } from '../models/getters/error.model';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private spinner : NgxSpinnerService) { }

  fireErrorMessage(tittle: string, message: string, functionExecWillClose: any = null) {
    setTimeout(() => {
      this.spinner.hide();
      Swal.fire({
        icon: 'error',
        title: tittle,
        text: message,
        willClose: functionExecWillClose
      })
    }, 2000);
  }

  fireSystemErrorMessage(data: any, functionExecWillClose: any = null) {
    console.log('fire system error message', data);
    Swal.fire({
      icon: 'error',
      title: data?.title,
      text: data?.message,
      willClose: functionExecWillClose
    })
  }

  firePreloader() {
    this.spinner.show();
  }

  hidePreloader() {
    this.spinner.hide();
  }

  fireErrorModelMessage(error: ErrorModel) {
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    setTimeout(() => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message
      })
    }, 2000);

  }

  fireSuccessMessage(title: string, timeSeconds: number = 1.2, position: SweetAlertPosition = 'center') {
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    setTimeout(() => {
      Swal.fire({
        position,
        icon: 'success',
        title,
        showConfirmButton: false,
        timer: timeSeconds * 1000
      })
    }, 2000);

  }
}
