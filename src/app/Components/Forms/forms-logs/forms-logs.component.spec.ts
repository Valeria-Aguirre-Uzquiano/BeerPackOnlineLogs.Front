import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLogsComponent } from './forms-logs.component';

describe('FormsLogsComponent', () => {
  let component: FormsLogsComponent;
  let fixture: ComponentFixture<FormsLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
