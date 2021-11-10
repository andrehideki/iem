import { deleteEntry } from '../../../../domain/usecase/';
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
  entryRepository.persist(entry);
});

test('should register a new entry', () => {
  const entryTarget = entryRepository.find({ name: entry.name })[0];
  deleteEntry(entryTarget.id, { entryRepository });
  expect(entryRepository.find({ name: entry.name }).length).toBe(0);
});
