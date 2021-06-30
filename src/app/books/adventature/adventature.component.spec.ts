import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventatureComponent } from './adventature.component';

describe('AdventatureComponent', () => {
  let component: AdventatureComponent;
  let fixture: ComponentFixture<AdventatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
