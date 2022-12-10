import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProfilComponent } from './dash-profil.component';

describe('DashProfilComponent', () => {
  let component: DashProfilComponent;
  let fixture: ComponentFixture<DashProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
