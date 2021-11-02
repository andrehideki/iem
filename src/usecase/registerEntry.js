import { EntryRepository } from "../repository/entryRepository.js"

const registerEntry = ({
  name, 
  value,
  description,
  date
}) => {
  EntryRepository.save({
    name, 
    value,
    description,
    date
  })
}

export { registerEntry }