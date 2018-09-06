import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/primeng';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './notification.service';
@NgModule({
  imports: [
    CommonModule,
    ToastModule
  ],
  providers: [
    MessageService,
    NotificationService
  ],
  declarations: [NotificationComponent],
  exports: [
    NotificationComponent
  ]
})
export class NotificationModule {}
