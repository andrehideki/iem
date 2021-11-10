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
    eventEmitter.on('newEntry', tableEntries.loadEntries)
  },

  loadEntries() {
    console.log('loading...')
  }
}

export default tableEntries;