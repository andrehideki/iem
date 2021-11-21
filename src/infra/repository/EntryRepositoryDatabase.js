import EntryRepository from '../../domain/repository/EntryRepository';
import Entry from '../../domain/model/Entry';
import { Op } from 'sequelize';

export default class extends EntryRepository {
  
  entryMapper;

  constructor(entryMapper) {
    super();
    this.entryMapper = entryMapper;
  }

  async get(id) {
    const mapper = await this.entryMapper.findOne({
      where: { id: id }
    });
    return !!mapper? this.toEntry(mapper) : undefined;
  }

  async getAll() {
    const mappers = await this.entryMapper.findAll();
    return mappers.map(mapper => this.toEntry(mapper));
  }

  async getAllAccounts() {
    const accounts = await this.entryMapper.aggregate('account', 'DISTINCT', { plain: false });
    return accounts.map(account => account.DISTINCT);
  }
  
  async persist(entry) {
    const mapper = this.entryMapper.build({
      name: entry.name || '',
      description: entry.description || '',
      date: entry.date,
      value: entry.value,
      account: entry.account
    });
    await mapper.save();
  }

  async update(entry) {
    const mapper = await this.entryMapper.findOne({
      where: { id: entry.id }
    });
    mapper.name = entry.name;
    mapper.description = entry.description;
    mapper.account = entry.account;
    mapper.value = entry.value;
    mapper.date = entry.date.toISOString().substring(0, 10);
    await mapper.save();
  }

  async find({ name, period, account }) {
    const mappers = await this.entryMapper.findAll({
      where: {
        [Op.and]: [
          {
            date: {
              [Op.between]: [ period.initialDate.toISOString().substring(0, 10), period.endDate.toISOString().substring(0, 10) ]
            }
          }, {
            account: {
              [Op.like]: `${account || '%'}`
            }
          }
        ],
      }
    }) || [];
    return mappers.map(mapper => this.toEntry(mapper));
  }

  async delete(id) {
    const entry = await this.entryMapper.findOne({
      where: { id: id }
    });
    if (!!entry) {
      await entry.destroy();
    }
  }

  toEntry(mapper) {
    return new Entry({ 
      id: mapper.id, 
      name: mapper.name || '',
      description: mapper.description || '',
      value: mapper.value,
      account: mapper.account || '',
      date: new Date(mapper.date)
    })
  }
}