import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerRouteComponentComponent } from './inner-route-component.component';

describe('InnerRouteComponentComponent', () => {
  let component: InnerRouteComponentComponent;
  let fixture: ComponentFixture<InnerRouteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerRouteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerRouteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
