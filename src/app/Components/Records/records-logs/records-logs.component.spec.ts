import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsLogsComponent } from './records-logs.component';

describe('RecordsLogsComponent', () => {
  let component: RecordsLogsComponent;
  let fixture: ComponentFixture<RecordsLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
