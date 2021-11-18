
import { formEntry, tableEntries, sectionBalance, formFilter } from './components';
import secionAccounts from './components/accounts_section';

const $formEntry = document.querySelector('#form_entry');
formEntry.init($formEntry);

const $tableEntries = document.querySelector('#table_entries');
tableEntries.init($tableEntries);

const $sectionBalance = document.querySelector('#section_balance');
sectionBalance.init($sectionBalance);

const $sectionAccounts = document.querySelector('#section_accounts');
secionAccounts.init($sectionAccounts);

const $formFilter = document.querySelector('#form_filter');
formFilter.init($formFilter);
