import { newEntry } from '../../../../domain/usecase/';
import EntryRepositoryMemory from '../../../../infra/repository/EntryRepositoryMemory';

var entry;
var entryRepository;

beforeEach(() => {
  entryRepository = new EntryRepositoryMemory();
  entry = {
    name: 'Entry',
    value: 100,
    description: '',
    date: new Date()
  }
});

test('should register a new entry', () => {
  newEntry(entry, entryRepository);
  expect(entryRepository.find({ name: entry.name }).length).toBe(1);
})