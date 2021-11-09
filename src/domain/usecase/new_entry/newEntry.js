const Entry = require('../../model/Entry.js');

const newEntry = ({ name, description, date, value }, entryRepository) => {
  const entry = new Entry({ name, description, date, value });
  entryRepository.persist(entry);
}

module.exports = newEntry