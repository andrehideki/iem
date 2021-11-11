import EntryRepository from '../../domain/repository/EntryRepository';
import Entry from '../../domain/model/Entry';

export default class extends EntryRepository {
  
  entries;

  constructor() {
    super();
    this.entries = [];
    this.entries.push(new Entry({ id: 1, name: 'entry', description: 'none', date: new Date(), value: 100 }))
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