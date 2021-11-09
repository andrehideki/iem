module.exports = class {
  id;
  name; 
  description;
  value;
  date;

  constructor({ id, name, description, value, date }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.value = value;
    this.date = date;
  }
}