import { newEntry } from '../../../../domain/usecase/';
import AccountRepositoryMemory from '../../../../infra/repository/AccountRepositoryMemory';
import EntryRepositoryMemory from '../../../../infra/repository/EntryRepositoryMemory';

var entry;
var entryRepository;
var accountRepository;

beforeEach(() => {
  entryRepository = new EntryRepositoryMemory();
  entryRepository.entries = [];
  accountRepository = new AccountRepositoryMemory();
  accountRepository.accounts = [];
  entry = {
    name: 'Entry',
    value: 100,
    description: '',
    account: 'teste',
    date: new Date()
  }
});

test('should register a new entry', async () => {
  await newEntry(entry, { entryRepository, accountRepository });
  expect(entryRepository.find({ name: entry.name }).length).toBe(1);
});

test('should register account if account not exists', async () => {
  await newEntry(entry, { entryRepository, accountRepository });
  const account = await accountRepository.get(entry.account);
  console.log(accountRepository.accounts)
  expect(account.balance).toBe(100);
});