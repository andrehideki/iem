import Period from '../../model/Period';

const getEntries = ({ initialDate, endDate }, { entryRepository }) => {
  const period = (!!initialDate && !!endDate)? new Period({ initialDate, endDate }) : undefined;
  return entryRepository
    .find({ period: period })
    .map(entry => {
      return {
        id: entry.id,
        name: entry.name,
        description: entry.description,
        date: entry.date.toISOString().substring(0, 10),
        value: entry.value
      }
    });
}

export default getEntries;