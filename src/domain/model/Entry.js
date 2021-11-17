export default class {
  id;
  name; 
  description;
  value;
  date;
  account;

  constructor({ id, name, description, value, date, account }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.value = value;
    this.date = date;
    this.account = account;
  }
}