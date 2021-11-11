import eventEmitter from '../../eventEmitter';

const formEntry = {
  form: null,

  init(target) {
    this.form = target;
    target.innerHTML = `
      <label>
        <span>Nome</span>
        <input id="name" name="name"/>
      </label>
      <label>
        <span>Descrição</span>
        <input id="description" name="description"/>
      </label>
      <label>
        <span>Data</span>
        <input id="date" type="date" name="date"/>
      </label>
      <label>
        <span>Valor</span>
        <input id="value" type="number" name="value"/>
      </label>
      <button>add</button>
    `;
    target.addEventListener('submit', formEntry.onSubmit);
  },

  onSubmit(event) {
    event.preventDefault();
    const inputs = event.target.querySelectorAll('input');
    const values = {};
    for (let input of inputs) {
      values[input.name] = input.value || '';
    }
    formEntry.addEntry(values);
  },

  addEntry(values) {
    fetch('entry', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then(() => {
      formEntry.clear();
      eventEmitter.emit('newEntry');
    });
  },

  clear() {
    const inputs = this.form.querySelectorAll('input');
    for (let input of inputs) {
      input.value = '';
    }
  }
}

export default formEntry;