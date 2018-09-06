import { TestBed, inject } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { MessageService } from 'primeng/primeng';

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MessageService,
        NotificationService]
    });
  });

  it('should be created', inject([NotificationService], (service: NotificationService) => {
    expect(service).toBeTruthy();
  }));
});
