import { Injectable } from '@angular/core';

import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root',
})
export class SwalService {

  constructor() { }

  simpleAlert(){
    Swal.fire('Hello world!');
  }

  success(title, underText?): Promise<any> {
    return Swal.fire({
      title,
      text: underText,
      type: 'success',
      confirmButtonColor: 'green',
      customClass: 'auto-width',
      heightAuto: false,
    });
  }

  warning(title, underText?): Promise<any> {
    return Swal.fire({
      title,
      text: underText,
      type: 'info',
      confirmButtonColor: 'orange',
      customClass: 'auto-width warning-swal',
      heightAuto: false,
    });
  }

  error(title, underText?): Promise<any> {
    return Swal.fire({
      title,
      text: underText,
      type: 'error',
      confirmButtonColor: 'green',
      customClass: 'auto-width',
      heightAuto: false,
    });
  }

  errorHtml(title, html?): Promise<any> {
    return Swal.fire({
      title,
      html,
      type: 'error',
      confirmButtonColor: 'green',
      customClass: 'auto-width',
      heightAuto: false,
    });
  }

  confirm(title, text?): Promise<any> {
    return Swal.fire({
      title,
      text,
      type: 'warning',
      reverseButtons: true,
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      customClass: 'auto-width',
      heightAuto: false,
    });
  }

  confirmButtonsCustom(title, buttonConfirm?, buttonCancel?): Promise<any>{
    return Swal.fire({
      title,
      type: 'warning',
      reverseButtons: true,
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#ff6a00',
      confirmButtonText: buttonConfirm,
      cancelButtonText: buttonCancel,
      customClass: 'auto-width',
      heightAuto: false,
    });
  }
}
