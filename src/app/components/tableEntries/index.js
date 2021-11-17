import { getTodayDate, getLastDateOfCurrentMonth, getPeriodFromYearMonth, getFirstDateOfCurrentMonth } from '../../utils/date';
import eventEmitter from '../../eventEmitter';
import { deleteRequest } from '../../utils/ajax';

const tableEntries = {
  async init(target) {
    target.innerHTML = `
      <thead>
        <tr>
          <th style="width: 25%">Nome</th>
          <th style="width: 35%">Descrição</th>
          <th style="width: 10%">Conta</th>
          <th style="width: 5%">Data</th>
          <th style="width: 25%">Valor</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    `;
    this.loadEntries(target, { initialDate: getFirstDateOfCurrentMonth(), endDate: getLastDateOfCurrentMonth(), account: '' });
    eventEmitter.on([ 'newEntry', 'deleteEntry' ], () => tableEntries.loadEntries(target, { initialDate: getFirstDateOfCurrentMonth(), endDate: getLastDateOfCurrentMonth(), account: '' }));
    eventEmitter.on('filterChange', filterValues => {
      const { initialDate, endDate } = getPeriodFromYearMonth(filterValues.month);
      const { account } = filterValues;
      this.loadEntries(target, { initialDate, endDate, account })
    });
  },

  deleteEntry(id) {
    deleteRequest(`entry/${id}`).then(() => {
      eventEmitter.emit('deleteEntry')
    });
  },

  async loadEntries(target, { initialDate, endDate, account }) {
    fetch(`entry?initialDate=${initialDate.toISOString().substring(0, 10)}&endDate=${endDate.toISOString().substring(0, 10)}&account=${account}`)
      .then(data => data.json())
      .then(entries => {
        const tbody = target.querySelector('tbody');
        tbody.innerHTML = `
          ${entries.map(entry => `
            <tr>
              <input type="hidden" name="id" value="${entry.id}" />
              <td>
                <input name="name" value="${entry.name}" class="form-control form-control-sm updateEntry" />
              </td>
              <td>
                <input name="description" value="${entry.description}" class="form-control form-control-sm updateEntry" />
              </td>
              <td>
                <input name="account" value="${ entry.account }" class="form-control form-control-sm updateEntry" />
              </td>
              <td>
                <input type="date" name="date" value="${ entry.date }" class="form-control form-control-sm updateEntry" />
              </td>
              <td>
                <input name="value" value="${entry.value}" class="form-control form-control-sm updateEntry" />
              </td>
              <td>
                <button data-id="${ entry.id }" class="btn btn-outline-danger btn-sm">
                  <i class="bi bi-trash2-fill"></i>
                </button>
              </td>
            </tr>
          `).join('')} 
        `;
        for (let button of tbody.querySelectorAll('button')) {
          button.addEventListener('click', ({ target }) => {
            console.log(button)
            const id = button.dataset.id;
            if (confirm('Você confirma exclusão?')) {
              tableEntries.deleteEntry(id); 
            }
          })
        }
        for (let action of tbody.querySelectorAll('.updateEntry')) {
          action.addEventListener('change', () => {
            const inputs = action.parentElement.parentElement.querySelectorAll('input');
            const values = {};
            for (let input of inputs) {
              values[input.name] = (input.value || '').trim();
            }
            fetch(`entry/${values.id}`, {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
            })
            .then(() => {
              eventEmitter.emit('updateEntry');
            });
          });
        }
      });
  }
}

export default tableEntries;