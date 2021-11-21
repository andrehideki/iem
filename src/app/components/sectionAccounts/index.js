import eventEmitter from "../../eventEmitter";
import { getRequest } from "../../utils/ajax";
import { formatToBRL } from "../../utils/money";

const secionAccounts = {
  async init(target) {
    const triggerEvents = ['newEntry', 'deleteEntry', 'updateEntry', 'filterChange'];
    eventEmitter.on(triggerEvents, async () => await secionAccounts.getAccounts(target))
    await secionAccounts.getAccounts(target);
  },

  async getAccounts(target) {
    const data = await getRequest('account', {});
    const accounts = await data.json();
    target.innerHTML = `
      <div class="d-flex flex-row">
        ${ accounts.map(account => (`
          <div class="badge rounded-pill bg-light text-dark fs-6">
            ${account.name}: ${ formatToBRL(account.balance || 0) }
          </div>
        `)).join('') }
      </div>
    `;
  }
}

export default secionAccounts;