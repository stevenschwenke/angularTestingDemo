import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InnerComponentComponent} from './inner-component.component';
import {Component, ViewChild} from '@angular/core';
import {AppModule} from '../../app.module';

@Component({
  selector: 'app-host-component',
  template: '<app-inner-component [answer]="fakeAnswer"></app-inner-component>'
})
class MockHostComponent {

  @ViewChild(InnerComponentComponent)
  public innerComponent: InnerComponentComponent;

  fakeAnswer = 'I am!';
}

describe('InnerComponentComponent', () => {

  let component: MockHostComponent;
  let fixture: ComponentFixture<MockHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MockHostComponent],
      imports: [AppModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should answer the question who the good boy is', () => {
    const compiledTemplate = fixture.debugElement.nativeElement;

    const button = compiledTemplate.querySelector('#button');
    button.click();

    // Sometimes necessary, even with fixture.detectChanges() in beforeEach()
    fixture.detectChanges();

    const answer = compiledTemplate.querySelector('#answer');
    expect(answer.textContent).toBe('I am!');
  });
});
