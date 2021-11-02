import { Renderer } from './Renderer.js'
import { Db as database } from './Db.js'

const App = {
  
  init() {
    Renderer.renderEntries(database)
  }
}

export { App }