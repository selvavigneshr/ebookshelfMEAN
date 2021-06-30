import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraryComponent } from './literary.component';

describe('LiteraryComponent', () => {
  let component: LiteraryComponent;
  let fixture: ComponentFixture<LiteraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
