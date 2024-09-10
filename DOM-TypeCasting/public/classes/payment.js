export class Payment {
    constructor(c, d, a) {
        this.recepient = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.recepient} is owed $${this.amount} for ${this.details}`;
    }
}
