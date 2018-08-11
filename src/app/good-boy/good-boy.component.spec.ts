import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GoodBoyComponent} from './good-boy.component';

describe('GoodBoyComponent', () => {
  let component: GoodBoyComponent;
  let fixture: ComponentFixture<GoodBoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GoodBoyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodBoyComponent);
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
});
