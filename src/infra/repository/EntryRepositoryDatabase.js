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

  async get(id) {
    const mapper = await this.entryMapper.findOne({
      where: { id: id }
    });
    return !!mapper? 
      new Entry({ 
        id: mapper.id, 
        name: mapper.name || '',
        description: mapper.description || '',
        value: mapper.value,
        date: mapper.date
      }) : undefined;
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
    await mapper.save();
  }

  async update(entry) {
    const mapper = await this.entryMapper.findOne({
      where: { id: entry.id }
    });
    mapper.name = entry.name;
    mapper.description = entry.description;
    mapper.value = entry.value;
    mapper.date = entry.date;
    await mapper.save();
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

  async delete(id) {
    const entry = await this.entryMapper.findOne({
      where: { id: id }
    });
    if (!!entry) {
      await entry.destroy();
    }
  }
}