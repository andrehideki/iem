import Period from '../../model/Period';

const getEntries = async ({ initialDate, endDate }, { entryRepository }) => {
  const period = (!!initialDate && !!endDate)? new Period({ initialDate, endDate }) : undefined;
  const entries = await entryRepository.find({ period: period });
  console.log('1', entries)
  entries.map(entry => {
      return {
        id: entry.id,
        name: entry.name,
        description: entry.description,
        date: entry.date.toISOString().substring(0, 10),
        value: entry.value
      }
    });
  console.log('asdf', entries)
  return entries;
}

export default getEntries;