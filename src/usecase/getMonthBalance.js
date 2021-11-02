import { EntryRepository } from '../repository/entryRepository.js'

const getMonthBalance = (month) => {
  const entries = EntryRepository.getAll();
  const positive = entries.filter(e => e.date.getMonth() + 1 === (month) && e.value > 0).map(e => e.value).reduce((a, b) => a + b, 0)
  const negative = entries.filter(e => e.date.getMonth() + 1 === (month) && e.value < 0).map(e => e.value).reduce((a, b) => a + b, 0)
  console.log(month, 'sdaiofj', positive, negative)
  return {
    positive,
    negative
  }
}

export { getMonthBalance }