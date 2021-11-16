import Entry from '../../model/Entry';

const newEntry = async ({ name, description, date, value }, entryRepository) => {
  const entry = new Entry({ name, description, date, value });
  await entryRepository.persist(entry);
}

export default newEntry;