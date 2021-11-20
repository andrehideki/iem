import Account from "../../domain/model/Account";
import AccountRepository from "../../domain/repository/AccountRepository";

export default class extends AccountRepository {
  
  accountMapper;

  constructor(accountMapper) {
    super();
    this.accountMapper = accountMapper;
  }

  async get(name) {
    const mapper = await this.accountMapper.findOne({
      where: { name: name }
    });
    return !!mapper? this.toAccount(mapper) : undefined;
  }

  async getAll() {
    const mappers = await this.accountMapper.findAll();
    return mappers.map(mapper => this.toAccount(mapper));
  }

  async persist(account) {
    const mapper = this.accountMapper.build({
      name: account.name || '',
      balance: account.balance || 0
    });
    await mapper.save();
  }

  async update(account) {
    const mapper = await this.accountMapper.findOne({
      where: { name: account.name }
    });
    mapper.name = account.name;
    mapper.balance = account.balance;
    await mapper.save();
  }

  async delete(name) {
    const account = await this.entryMapper.findOne({
      where: { name: name }
    });
    if (!!account) {
      await account.destroy();
    }
  }

  toAccount(mapper) {
    return new Account({ name: mapper.name, balance: mapper.balance });
  }
}