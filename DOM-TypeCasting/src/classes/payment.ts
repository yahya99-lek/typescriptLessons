import {Hasformatter} from '../interfaces/HasFormatter.js'

export class Payment implements Hasformatter{
    readonly recepient: string;
    private details: string;
    public amount: number;
  
    constructor(c: string, d: string, a: number) {
      this.recepient = c;
      this.details = d;
      this.amount = a;
    }
    
    format() {
      return `${this.recepient} is owed $${this.amount} for ${this.details}`;
    }
  }