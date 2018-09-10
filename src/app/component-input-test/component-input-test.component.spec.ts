import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInputTestComponent } from './component-input-test.component';

describe('ComponentInputTestComponent', () => {
  let component: ComponentInputTestComponent;
  let fixture: ComponentFixture<ComponentInputTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInputTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInputTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
