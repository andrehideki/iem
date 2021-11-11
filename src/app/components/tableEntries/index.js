import eventEmitter from '../../eventEmitter';

const tableEntries = {
  async init(target) {
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
    this.loadEntries(target);
    eventEmitter.on('newEntry', () => tableEntries.loadEntries(target));
  },

  async loadEntries(target) {
    fetch('entry')
      .then(data => data.json())
      .then(entries => {
        const tbody = target.querySelector('tbody');
        tbody.innerHTML = `
          ${entries.map(entry => `
            <tr>
              <td>${entry.name}</td>
              <td>${entry.description}</td>
              <td>${entry.date}</td>
              <td>${entry.value}</td>
            </tr>
          `)} 
        `
      });
  }
}

export default tableEntries;