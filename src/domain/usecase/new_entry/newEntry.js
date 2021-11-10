import Entry from '../../model/Entry';

const newEntry = ({ name, description, date, value }, entryRepository) => {
  const entry = new Entry({ name, description, date, value });
  entryRepository.persist(entry);
}

export default newEntry;