import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldevelopmentComponent } from './personaldevelopment.component';

describe('PersonaldevelopmentComponent', () => {
  let component: PersonaldevelopmentComponent;
  let fixture: ComponentFixture<PersonaldevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaldevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaldevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
