import Entry from '../model/Entry';

const updateEntry = async ({ id, name, description, date, value, account }, { entryRepository }) => {
  let entry = await entryRepository.get(id);
  if (!entry) throw new Error('Entry not found: ' + id);
  entry = new Entry({ id, name, description, date, value, account });
  await entryRepository.update(entry);
}

export default updateEntry;