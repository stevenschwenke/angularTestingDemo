import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComponentInputTestComponent} from './component-input-test.component';
import {AppModule} from '../app.module';

describe('ComponentInputTestComponent', () => {
  let component: ComponentInputTestComponent;
  let fixture: ComponentFixture<ComponentInputTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [AppModule]
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
