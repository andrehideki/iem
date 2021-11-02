import { Renderer } from './Renderer.js'
import { FormEntry } from './component/FormEntry.js'
import { getEntries } from './usecase/getEntries.js'
import { EntriesBalance } from './component/EntriesBalanace.js'
import { Emitter } from './Emitter.js'

const App = {
  
  init() {
    const currentDate = new Date();
    initEvents()
    Renderer.renderEntries(getEntries())
    EntriesBalance.init({ currentMonth: currentDate.getMonth() + 1 })
    FormEntry.init()
  }
}

function initEvents() {
  Emitter.on('save', () => Renderer.renderEntries(getEntries()))
}

export { App }