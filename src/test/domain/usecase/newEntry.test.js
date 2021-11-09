const newEntry = require('../../../domain/usecase/new_entry/newEntry.js');

const entry = {
  name: 'Entry',
  value: 100,
  description: '',
  date: new Date()
}

test('should register a new entry', () => {
  newEntry(entry);
})