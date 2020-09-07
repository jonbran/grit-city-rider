import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronHorseTrailComponent } from './iron-horse-trail.component';

describe('IronHorseTrailComponent', () => {
  let component: IronHorseTrailComponent;
  let fixture: ComponentFixture<IronHorseTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IronHorseTrailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IronHorseTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
