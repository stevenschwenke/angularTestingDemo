import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-input-test',
  templateUrl: './component-input-test.component.html',
  styleUrls: ['./component-input-test.component.css']
})
export class ComponentInputTestComponent implements OnInit {

  private answerForInnerComponent = 'You are!';

  constructor() { }

  ngOnInit() {
  }

}
