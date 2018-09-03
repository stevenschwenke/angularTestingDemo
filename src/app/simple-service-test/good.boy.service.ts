import {Injectable} from '@angular/core';

@Injectable()
export class GoodBoyService {

  public getGoodBoy(): string {
    return 'You are!';
  }
}
