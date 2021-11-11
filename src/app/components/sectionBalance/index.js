import eventEmitter from "../../eventEmitter";

const sectionBalance = {
  
  init(target) {
    this.getBalance(target);
    eventEmitter.on('newEntry', () => this.getBalance(target));
  },

  getBalance(target) {
    fetch(`/entry/balance?initialDate=2021-11-01&endDate=2021-12-01`)
    .then(data => data.json())
    .then(balance => {
      target.innerHTML = `
        <div>
          <label>Total</label>
          <span>${balance.total || 0}</span>
        </div>
        <div>
          <label>Despesas</label>
          <span>${balance.loss || 0}</span>
        </div>
        <div>
          <label>Ganhos</label>
          <span>${balance.gain || 0}</span>
        </div>
      `
    });
  }
}

export default sectionBalance;