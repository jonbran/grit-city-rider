import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CedarRiverTrailComponent } from './cedar-river-trail.component';

describe('CedarRiverTrailComponent', () => {
  let component: CedarRiverTrailComponent;
  let fixture: ComponentFixture<CedarRiverTrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CedarRiverTrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CedarRiverTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
