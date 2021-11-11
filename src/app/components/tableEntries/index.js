import eventEmitter from '../../eventEmitter';

const tableEntries = {
  init(target) {
    target.innerHTML = `
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Data</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;
    this.loadEntries();
    eventEmitter.on('newEntry', tableEntries.loadEntries);
  },

  loadEntries() {
    fetch('entry').then(data => console.log(data))
  }
}

export default tableEntries;