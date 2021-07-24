import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  alertMessage(head: string, message: string, type: any) {
    Swal.fire(head, message, type);
  }

  confirmationPrompt(titleMessage: string, textMessage: string, iconType: any, confirmbtnText: string, cancelbtnText: string) {
    return new Promise((resolve, reject) => {
      Swal.fire({
        title: titleMessage,
        text: textMessage,
        icon: iconType,
        showCancelButton: true,
        confirmButtonText: confirmbtnText,
        cancelButtonText: cancelbtnText
      }).then((result) => {
        if (result.isConfirmed) {
          return resolve(true);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          return reject(false);
        }
      })
    });
  }
}
