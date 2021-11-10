// const Entry = require('../../model/Entry.js');
import Entry from '../../model/Entry';

export default newEntry = ({ name, description, date, value }, entryRepository) => {
  const entry = new Entry({ name, description, date, value });
  entryRepository.persist(entry);
}
