import { Renderer } from './Renderer.js'
import { FormEntry } from './FormEntry.js'
import { getEntries } from './usecase/getEntries.js'

const App = {
  
  init() {
    Renderer.renderEntries(getEntries())
    FormEntry.init();
  }
}

export { App }