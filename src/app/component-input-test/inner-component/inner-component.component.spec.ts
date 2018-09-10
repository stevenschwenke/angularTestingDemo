import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerComponentComponent } from './inner-component.component';

describe('InnerComponentComponent', () => {
  let component: InnerComponentComponent;
  let fixture: ComponentFixture<InnerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
