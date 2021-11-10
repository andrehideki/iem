// const EntryRepository = require('../../domain/repository/EntryRepository.js')
import EntryRepository from '../../domain/repository/EntryRepository';

export default class extends EntryRepository {
  
  entries;

  constructor() {
    super();
    this.entries = [];
  }
  
  persist(entry) {
    entry.id = this.entries.length + 1;
    this.entries.push(entry);
  }

  find({ name }) {
    return this.entries.filter(e => e.name === name);
  }
}