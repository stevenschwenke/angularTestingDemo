import { Component, OnInit } from '@angular/core';
import {GoodBoyService} from './good.boy.service';

@Component({
  selector: 'app-simple-service-test',
  templateUrl: './simple-service-test.component.html'
})
export class SimpleServiceTestComponent implements OnInit {

  answer;

  constructor(private goodBoyService: GoodBoyService) { }

  ngOnInit() {
  }

  onAnswerGoodBoy() {
    this.answer = this.goodBoyService.getGoodBoy();
  }

}
