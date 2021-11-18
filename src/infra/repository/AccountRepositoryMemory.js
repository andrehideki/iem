export default class {
  
  accounts;

  constructor() {
    this.accounts = [];
  }

  async get(name) {
    return this.accounts.find(account => account.name === name);
  }

  async getAll() {
    return this.accounts;
  }

  async persist(account) {
    this.accounts.push(account);
  }

  async update(account) {
    this.accounts = this.accounts.filter(a => a.name !== account.name);
    this.accounts.push(account);
  }

  async delete(name) {
    this.accounts = this.accounts.filter(account => account.name !== name);
  }
}