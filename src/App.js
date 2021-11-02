import { Renderer } from './Renderer.js'
import { FormEntry } from './component/FormEntry.js'
import { getEntries } from './usecase/getEntries.js'
import { EntriesBalance } from './component/EntriesBalanace.js'

const App = {
  
  init() {
    const currentDate = new Date();
    Renderer.renderEntries(getEntries())
    EntriesBalance.init({ currentMonth: currentDate.getMonth() + 1 })
    FormEntry.init()
  }
}

export { App }