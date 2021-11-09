const EntryRepository = require('../../domain/repository/EntryRepository.js')

module.exports = class extends EntryRepository {
  
  entries;

  constructor() {
    super();
    this.entries = [];
  }
  
  persist(entry) {
    entry.id = this.entries.length + 1;
    this.entries.push(entry);
  }
}