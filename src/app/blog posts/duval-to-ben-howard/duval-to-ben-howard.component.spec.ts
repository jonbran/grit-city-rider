import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuvalToBenHowardComponent } from './duval-to-ben-howard.component';

describe('DuvalToBenHowardComponent', () => {
  let component: DuvalToBenHowardComponent;
  let fixture: ComponentFixture<DuvalToBenHowardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuvalToBenHowardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuvalToBenHowardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
