import { getTodayDate, getLastDateOfCurrentMonth, getPeriodFromYearMonth } from '../../utils/date';
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
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    `;
    this.loadEntries(target, { initialDate: getTodayDate(), endDate: getLastDateOfCurrentMonth() });
    eventEmitter.on('newEntry', () => tableEntries.loadEntries(target));
    eventEmitter.on('periodChange', period => {
      const { initialDate, endDate } = getPeriodFromYearMonth(period);
      this.loadEntries(target, { initialDate, endDate })
    });
  },

  async loadEntries(target, { initialDate, endDate}) {
    console.log(`entry?initialDate=${initialDate.toISOString().substring(0, 10)}&endDate=${endDate.toISOString().substring(0, 10)}`)
    fetch(`entry?initialDate=${initialDate.toISOString().substring(0, 10)}&endDate=${endDate.toISOString().substring(0, 10)}`)
      .then(data => data.json())
      .then(entries => {
        const tbody = target.querySelector('tbody');
        tbody.innerHTML = `
          ${entries.map(entry => `
            <tr>
              <input type="hidden" value="${entry.id}" />
              <td>
                <input value="${entry.name}" />
              </td>
              <td>
                <input value="${entry.description}" />
              </td>
              <td>
                <input value="${entry.date}" />
              </td>
              <td>
                <input value="${entry.value}" />
              </td>
              <td>
                <button>Excluir</button>
              </td>
            </tr>
          `).join('')} 
        `
      });
  }
}

export default tableEntries;