import Entry from '../../model/Entry';

const newEntry = async ({ name, description, date, value, account }, entryRepository) => {
  const entry = new Entry({ name, description, date, value, account });
  await entryRepository.persist(entry);
}

export default newEntry;