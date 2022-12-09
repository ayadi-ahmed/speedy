import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashServicesComponent } from './dash-services.component';

describe('DashServicesComponent', () => {
  let component: DashServicesComponent;
  let fixture: ComponentFixture<DashServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
