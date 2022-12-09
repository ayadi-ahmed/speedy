import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBricoComponent } from './dashboard-brico.component';

describe('DashboardBricoComponent', () => {
  let component: DashboardBricoComponent;
  let fixture: ComponentFixture<DashboardBricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
