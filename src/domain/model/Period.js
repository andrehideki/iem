export default class {
  
  initialDate;
  endDate;
  
  constructor({ initialDate, endDate }) {
    this.initialDate = initialDate;
    this.endDate = endDate;
  }

  isBetween(date) {
    return this.initialDate.getTime() <= date.getTime() && this.endDate.getTime() >= date.getTime();
  }
}