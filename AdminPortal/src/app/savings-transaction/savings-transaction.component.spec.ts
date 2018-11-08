import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsTransactionComponent } from './savings-transaction.component';

describe('SavingsTransactionComponent', () => {
  let component: SavingsTransactionComponent;
  let fixture: ComponentFixture<SavingsTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
