const newEntry = ({ name, description, date, value }, entryRepository) => {
  
  entryRepository.persist({ test: 'sdfioj'});
}

module.exports = newEntry