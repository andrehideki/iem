import { Db } from '../Db.js'

const EntryRepository = {
  entries: Db,
  
  getAll() {
    return EntryRepository.entries;
  },

  save(entry) {
    EntryRepository.entries.push(entry)
  }
}

export { EntryRepository }