import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComponentTestComponent} from './component-test.component';

describe('ComponentTestComponent', () => {
  let component: ComponentTestComponent;
  let fixture: ComponentFixture<ComponentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentTestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ask the question who the good boy is', () => {

    const compiledTemplate = fixture.debugElement.nativeElement;
    expect(compiledTemplate.querySelector('p').textContent).toContain('Who is a good boy?');
  });

  it('should answer the question who the good boy is', () => {
    const compiledTemplate = fixture.debugElement.nativeElement;

    const button = compiledTemplate.querySelector('#button');
    button.click();

    // Sometimes necessary, even with fixture.detectChanges() in beforeEach()
    fixture.detectChanges();

    const answer = compiledTemplate.querySelector('#answer');
    expect(answer.textContent).toBe('You are!');
  });
});
