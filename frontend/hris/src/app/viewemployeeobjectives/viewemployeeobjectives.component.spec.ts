import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeeobjectivesComponent } from './viewemployeeobjectives.component';

describe('ViewemployeeobjectivesComponent', () => {
  let component: ViewemployeeobjectivesComponent;
  let fixture: ComponentFixture<ViewemployeeobjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewemployeeobjectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewemployeeobjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
