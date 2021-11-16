import eventEmitter from '../../eventEmitter';

const formEntry = {
  form: null,

  init(target) {
    this.form = target;
    target.innerHTML = `
      <div class="row">
        <div class="col">
          <label>Nome</label>
          <input id="name" name="name" class="form-control form-control-sm" />
        </div>
        <div class="col">
          <label>Descrição</label>
          <input id="description" name="description" class="form-control form-control-sm"/>
        </div>
        <div class="col">
          <label>Data</label>
          <input id="date" type="date" name="date" class="form-control form-control-sm"/>
        </div>
        <div class="col">
          <label>Valor</label>
          <input id="value" type="number" name="value" class="form-control form-control-sm"/>
        </div>
        <div class="col">
          <button class="btn btn-primary mt-3">
            <i class="bi bi-plus"></i>
            add
          </button>
        </div>
      </div>
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