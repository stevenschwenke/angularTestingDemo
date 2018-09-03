import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.html'
})
export class ComponentTestComponent implements OnInit {

  answer;

  constructor() {
  }

  ngOnInit() {
  }

  onAnswerGoodBoy() {
    this.answer = 'You are!';
  }
}
