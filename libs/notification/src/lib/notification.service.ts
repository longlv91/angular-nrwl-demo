import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/primeng';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private messageService: MessageService) {
  }

  showSuccess(msg: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success Message',
      detail: msg
    });
  }

  showWarning(msg: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warning Message',
      detail: msg
    });
  }

  showError(msg: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error Message',
      detail: msg
    });
  }

  clear() {
    this.messageService.clear();
  }
}
