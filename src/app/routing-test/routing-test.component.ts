import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-routing-test',
  templateUrl: './routing-test.component.html'
})
export class RoutingTestComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onAnswerGoodBoy() {
    this.router.navigate(['routed']);
  }

}
