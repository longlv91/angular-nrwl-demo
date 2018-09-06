import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { SharedUiModule } from '@angular-nrwl-demo/shared-ui';
import { MessageService } from 'primeng/primeng';
import { NotificationService } from '@angular-nrwl-demo/notification';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Store, StateObservable, StoreModule } from '@ngrx/store';
import * as fromState from '../../../reducers/state.reducer';
import { TestStore } from '@testing/testStore';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        SharedUiModule,
        HttpClientModule,
        StoreModule.forRoot({'state': fromState.reducer})
      ],
      declarations: [ UserListComponent ],
      providers: [
        HttpClient,
        MessageService,
        NotificationService,
        {provide: Store, useClass: TestStore}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
