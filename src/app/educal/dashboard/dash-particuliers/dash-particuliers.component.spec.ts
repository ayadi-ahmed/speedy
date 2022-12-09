import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashParticuliersComponent } from './dash-particuliers.component';

describe('DashParticuliersComponent', () => {
  let component: DashParticuliersComponent;
  let fixture: ComponentFixture<DashParticuliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashParticuliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashParticuliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
