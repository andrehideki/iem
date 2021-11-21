export default class {
  name; 
  balance;

  constructor({ name, balance }) {
    this.name = name;
    this.balance = balance;
  }

  add(value) {
    this.balance = this.balance + value;
  }

  subtract(value) {
    this.balance = this.balance - value;
  }
}