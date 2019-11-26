import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRowComponent } from './teacher-row.component';

describe('TeacherRowComponent', () => {
  let component: TeacherRowComponent;
  let fixture: ComponentFixture<TeacherRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
