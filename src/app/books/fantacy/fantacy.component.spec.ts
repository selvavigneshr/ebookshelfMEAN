import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantacyComponent } from './fantacy.component';

describe('FantacyComponent', () => {
  let component: FantacyComponent;
  let fixture: ComponentFixture<FantacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
