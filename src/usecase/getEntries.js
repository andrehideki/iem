import { EntryRepository } from '../repository/entryRepository.js';

const getEntries = () => {
  return EntryRepository.getAll();
}

export { getEntries }