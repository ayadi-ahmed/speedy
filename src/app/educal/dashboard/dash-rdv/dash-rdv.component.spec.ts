import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRdvComponent } from './dash-rdv.component';

describe('DashRdvComponent', () => {
  let component: DashRdvComponent;
  let fixture: ComponentFixture<DashRdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashRdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
