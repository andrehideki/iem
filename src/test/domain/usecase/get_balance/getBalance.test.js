import { getBalance } from '../../../../domain/usecase/';
import EntryRepositoryMemory from '../../../../infra/repository/EntryRepositoryMemory';

var entry, entry2, entry3;
var entryRepository;

beforeEach(() => {
  entryRepository = new EntryRepositoryMemory();
  entryRepository.entries = [];
  entry = {
    name: 'Entry',
    value: 100,
    description: '',
    date: new Date(2021, 0, 1)
  }
  entry2 = {
    name: 'Entry 2',
    value: 50,
    description: '',
    date: new Date(2021, 0, 1)
  }
  entry3 = {
    name: 'Entry 3',
    value: 200,
    description: '',
    date: new Date(2021, 1, 1)
  }
  entryRepository.persist(entry);
  entryRepository.persist(entry2);
  entryRepository.persist(entry3);
});

test('should get balance', () => {
  const balance = getBalance({ initialDate: new Date(2021, 0, 1), endDate: new Date(2021, 0, 2) }, { entryRepository });
  expect(balance.total).toBe(150);
})