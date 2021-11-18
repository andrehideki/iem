import { getRequest } from "../../utils/ajax";
import { formatToBRL } from "../../utils/money";

const secionAccounts = {
  init(target) {
    getRequest('account', {})
      .then(data => data.json())
      .then(accounts => {
        target.innerHTML = `
          <div class="d-flex flex-row">
            ${ accounts.map(account => (`
              <div class="badge rounded-pill bg-light text-dark fs-6">
                ${account.name}: ${ formatToBRL(account.balance || 0) }
              </div>
             `)).join('') }
          </div>
        `;
      });
  }
}

export default secionAccounts;