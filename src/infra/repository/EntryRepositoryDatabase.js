import EntryRepository from '../../domain/repository/EntryRepository';
import Entry from '../../domain/model/Entry';
import { Op } from 'sequelize';

export default class extends EntryRepository {
  
  entryMapper;

  constructor(entryMapper) {
    super();
    this.entries = [];
    this.entryMapper = entryMapper;
  }

  async getAll() {
    const mappers = await this.entryMapper.findAll();
    return mappers.map(mapper => {
      return new Entry({ 
        id: mapper.id, 
        name: mapper.name || '',
        description: mapper.description || '',
        value: mapper.value,
        date: mapper.date
      })
    })
  }
  
  async persist(entry) {
    const mapper = this.entryMapper.build({
      name: entry.name || '',
      description: entry.description || '',
      date: entry.date,
      value: entry.value
    });
    mapper.save();
  }

  async find({ name, period }) {
    const mappers = await this.entryMapper.findAll({
      where: {
        date: {
          [Op.between]: [ period.initialDate, period.endDate ]
        }
      }
    }) || [];
    return mappers.map(mapper => {
      return new Entry({ 
        id: mapper.id, 
        name: mapper.name || '',
        description: mapper.description || '',
        value: mapper.value,
        date: mapper.date
      })
    })
  }

  delete(id) {
    this.entries = this.entries.filter(entry => entry.id !== id);
  }
}