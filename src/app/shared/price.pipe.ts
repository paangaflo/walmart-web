import { Pipe } from '@angular/core';

@Pipe({name: 'price'})
export class PricePipe {
  transform (input:number) {
    return Math.floor(input * 2);
  }
}
