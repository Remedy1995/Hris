import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeeinformationobjectivesComponent } from './employeeeinformationobjectives.component';

describe('EmployeeeinformationobjectivesComponent', () => {
  let component: EmployeeeinformationobjectivesComponent;
  let fixture: ComponentFixture<EmployeeeinformationobjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeeinformationobjectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeeinformationobjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
