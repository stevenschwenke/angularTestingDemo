import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-inner-component',
  templateUrl: './inner-component.component.html',
  styleUrls: ['./inner-component.component.css']
})
export class InnerComponentComponent implements OnInit {

  @Input() answer: string;
  private showAnswer = false;

  constructor() {
  }

  ngOnInit() {
  }

  onAnswerGoodBoy() {
    this.showAnswer = !this.showAnswer;
  }

}
