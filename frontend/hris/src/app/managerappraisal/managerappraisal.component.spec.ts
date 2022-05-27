import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerappraisalComponent } from './managerappraisal.component';

describe('ManagerappraisalComponent', () => {
  let component: ManagerappraisalComponent;
  let fixture: ComponentFixture<ManagerappraisalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerappraisalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerappraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
