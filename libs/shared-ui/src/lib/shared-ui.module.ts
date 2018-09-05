import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {
  CheckboxModule,
  InputTextareaModule,
  InputTextModule,
  MenuModule,
  RadioButtonModule,
  SidebarModule,
  SplitButtonModule
} from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    CheckboxModule,
    InputTextareaModule,
    InputTextModule,
    MenuModule,
    RadioButtonModule,
    SidebarModule,
    SplitButtonModule,
    TableModule,
    DialogModule,
    PasswordModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ToastModule,
    SidebarModule,
    MenuModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    CheckboxModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    DialogModule,
    PasswordModule
  ]
})
export class SharedUiModule { }
