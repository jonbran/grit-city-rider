import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TahuyaComponent } from './tahuya.component';

describe('TahuyaComponent', () => {
  let component: TahuyaComponent;
  let fixture: ComponentFixture<TahuyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TahuyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TahuyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
