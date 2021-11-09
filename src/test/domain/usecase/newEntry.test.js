const newEntry = require('../../../domain/usecase/new_entry/newEntry.js');
const EntryRepositoryMemory = require('../../../infra/repository/EntryRepositoryMemory.js');

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