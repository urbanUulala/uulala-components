import { Injectable } from '@angular/core';
import Swal, { SweetAlertPosition } from 'sweetalert2';

import { NgxSpinnerService } from 'ngx-spinner';
import { ErrorModel } from '../models/error.model';
import { ConfirmationMessage } from '../interfaces/swal/confirmation.swal';




@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(
    private spinner: NgxSpinnerService) { }

  fireErrorMessage(tittle: string, message: string, functionExecWillClose: any = null) {
    this.hidePreloader();
    setTimeout(() => {
      Swal.fire({
        icon: 'error',
        title: tittle,
        text: message,
        willClose: functionExecWillClose
      })
    }, 2000);
  }

  fireSystemErrorMessage(data: any, functionExecWillClose: any = null) {
    this.hidePreloader();
    setTimeout(() => {
      Swal.fire({
        icon: 'error',
        title: data?.title,
        text: data?.message,
        willClose: functionExecWillClose
      })
    }, 2000);
  }

  firePreloader() {
    this.spinner.show();
  }

  hidePreloader() {
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  fireErrorModelMessage(error: ErrorModel) {
    this.hidePreloader();
    setTimeout(() => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message
      })
    }, 2000);

  }

  fireSuccessMessage(title: string, timeSeconds: number = 1.2, position: SweetAlertPosition = 'center', timeToFire: number = 2000) {
    this.hidePreloader();
    setTimeout(() => {
      Swal.fire({
        position,
        icon: 'success',
        title,
        showConfirmButton: false,
        timer: timeSeconds * 1000
      })
    }, timeToFire);

  }

  fireTimeOutMessage(title: string, subtitle: string, extraInformation: string, imageTimeOut: any, placeholder: string, titleButton: string,cancelButtonText:string, execFunction: any ) {
    return Swal.fire({
      title: "<img src='" + imageTimeOut + "'>",
      input: "password",
      inputPlaceholder: placeholder,
      html:
        '<div class="highlighted-text fs-22"><p><strong>' + title + '</strong></p></div>' +
        '<div class="normal-text-legal fs-18"><p>' + subtitle + '</p></div>',
      showConfirmButton: true,
      confirmButtonText: titleButton,
      confirmButtonColor: '#5867DB',
      showCancelButton: true,
      cancelButtonText: cancelButtonText,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      reverseButtons: false,
      showLoaderOnConfirm: true,
      footer: '<div class="normal-text-legal fs-13"><p><strong>' + extraInformation + '</strong></p></div>',
      backdrop: 'rgba(255,255,255,1)',
      preConfirm: (value) => { return value }
    }).then(execFunction)
  }

  fireErrorMessageTimer(title: string, message: string,) {
    return Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      showConfirmButton: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    });
  }
  fireSuccessMessageTimer(title: string) {
    Swal.fire({
      icon: 'success',
      title,
      showConfirmButton: false,
      timer: 2000
    })
  }

  fireConfirmationMessage(config: ConfirmationMessage, actionFunction: any) {
    Swal.fire(config).then(actionFunction)
  }

}
