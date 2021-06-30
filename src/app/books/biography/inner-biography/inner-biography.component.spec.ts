import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerBiographyComponent } from './inner-biography.component';

describe('InnerBiographyComponent', () => {
  let component: InnerBiographyComponent;
  let fixture: ComponentFixture<InnerBiographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerBiographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
