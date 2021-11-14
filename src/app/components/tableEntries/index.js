import { getTodayDate, getLastDateOfCurrentMonth, getPeriodFromYearMonth } from '../../utils/date';
import eventEmitter from '../../eventEmitter';
import { deleteRequest } from '../../utils/ajax';

const tableEntries = {
  async init(target) {
    target.innerHTML = `
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Data</th>
          <th>Valor</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    `;
    this.loadEntries(target, { initialDate: getTodayDate(), endDate: getLastDateOfCurrentMonth() });
    eventEmitter.on([ 'newEntry', 'deleteEntry' ], () => tableEntries.loadEntries(target, { initialDate: getTodayDate(), endDate: getLastDateOfCurrentMonth() }));
    eventEmitter.on('periodChange', period => {
      const { initialDate, endDate } = getPeriodFromYearMonth(period);
      this.loadEntries(target, { initialDate, endDate })
    });
  },

  deleteEntry(id) {
    deleteRequest(`entry/${id}`).then(() => {
      eventEmitter.emit('deleteEntry')
    });
  },

  async loadEntries(target, { initialDate, endDate}) {
    fetch(`entry?initialDate=${initialDate.toISOString().substring(0, 10)}&endDate=${endDate.toISOString().substring(0, 10)}`)
      .then(data => data.json())
      .then(entries => {
        const tbody = target.querySelector('tbody');
        tbody.innerHTML = `
          ${entries.map(entry => `
            <tr>
              <td>
                <input value="${entry.name}" />
              </td>
              <td>
                <input value="${entry.description}" />
              </td>
              <td>
                <input type="date" value="${ entry.date }" />
              </td>
              <td>
                <input value="${entry.value}" />
              </td>
              <td>
                <button data-id="${ entry.id }">Excluir</button>
              </td>
            </tr>
          `).join('')} 
        `
        for (let button of tbody.querySelectorAll('button')) {
          button.addEventListener('click', ({ target }) => {
            const id = target.dataset.id;
            if (confirm('Você confirma exclusão?')) {
              tableEntries.deleteEntry(id); 
            }
          })
        }
      });
  }
}

export default tableEntries;