import { Renderer } from './Renderer.js'
import { FormEntry } from './component/FormEntry.js'
import { getEntries } from './usecase/getEntries.js'
import { EntriesBalance } from './component/EntriesBalanace.js'

const App = {
  
  init() {
    Renderer.renderEntries(getEntries())
    EntriesBalance.init()
    FormEntry.init()
  }
}

export { App }