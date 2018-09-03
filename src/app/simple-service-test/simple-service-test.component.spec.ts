import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SimpleServiceTestComponent} from './simple-service-test.component';
import {GoodBoyService} from './good.boy.service';

class MockGoodBoyService {

  public getGoodBoy(): string {
    return 'I am!';
  }
}

describe('SimpleServiceTestComponent', () => {
  let component: SimpleServiceTestComponent;
  let fixture: ComponentFixture<SimpleServiceTestComponent>;

  // It's important to provide all classes that are used by the component under test. The TestBed can be seen as a new standalone
  // application that needs all dependencies provided. Without the provided GoodBoyService, there would be a
  // "NullInjectorError: No provider for GoodBoyService!"

  beforeEach(async(() => {

    const mockGoodBoyService = new MockGoodBoyService();

    TestBed.configureTestingModule({
      declarations: [SimpleServiceTestComponent],
      providers: [
        {provide: GoodBoyService, useValue: mockGoodBoyService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleServiceTestComponent);
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
    expect(answer.textContent).toBe('I am!'); // mocked value from mock service is used
  });
});
