import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {Location} from '@angular/common';
import {RoutingTestComponent} from './routing-test.component';
import {AppModule} from '../app.module';

describe('RoutingTestComponent', () => {

  let location: Location;
  let component: RoutingTestComponent;
  let fixture: ComponentFixture<RoutingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        AppModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(RoutingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Routing', () => {

    it('should navigate', fakeAsync(() => {

      component.onAnswerGoodBoy();

      tick(50);

      expect(location.path()).toBe('/routed');
    }));
  });
});
