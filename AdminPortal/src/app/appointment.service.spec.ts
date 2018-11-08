import { TestBed, inject } from '@angular/core/testing';

import { AppointmentService } from './appointment.service';

describe('AppointmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentService]
    });
  });

  it('should be created', inject([AppointmentService], (service: AppointmentService) => {
    expect(service).toBeTruthy();
  }));
});
