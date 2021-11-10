import EntryRepository from '../../domain/repository/EntryRepository';

export default class extends EntryRepository {
  
  entries;

  constructor() {
    super();
    this.entries = [];
  }

  getAll() {
    return this.entries;
  }
  
  persist(entry) {
    entry.id = this.entries.length + 1;
    this.entries.push(entry);
  }

  find({ name }) {
    return this.entries.filter(e => e.name === name);
  }

  delete(id) {
    this.entries = this.entries.filter(entry => entry.id !== id);
  }
}