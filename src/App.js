import { Renderer } from './Renderer.js'
import { FormEntry } from './component/FormEntry.js'
import { getEntries } from './usecase/getEntries.js'
import { EntriesBalance } from './component/EntriesBalanace.js'
import { Emitter } from './Emitter.js'

const App = {
  
  init() {
    initEvents()
    Renderer.renderEntries(getEntries())
    EntriesBalance.init({ currentMonth: new Date().getMonth() + 1 })
    FormEntry.init()
  }
}

function initEvents() {
  Emitter.on('save', () => Renderer.renderEntries(getEntries()))
  EntriesBalance.init({ currentMonth: new Date().getMonth() + 1 })
}

export { App }