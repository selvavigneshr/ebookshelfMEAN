import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorpublishComponent } from './authorpublish.component';

describe('AuthorpublishComponent', () => {
  let component: AuthorpublishComponent;
  let fixture: ComponentFixture<AuthorpublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorpublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorpublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
