import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinemanagerappraisalComponent } from './linemanagerappraisal.component';

describe('LinemanagerappraisalComponent', () => {
  let component: LinemanagerappraisalComponent;
  let fixture: ComponentFixture<LinemanagerappraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinemanagerappraisalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinemanagerappraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
