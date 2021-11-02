import { Renderer } from './Renderer.js'
import { Db as database } from './Db.js'
import { FormEntry } from './FormEntry.js'

const App = {
  
  init() {
    Renderer.renderEntries(database)
    FormEntry.init();
  }
}

export { App }