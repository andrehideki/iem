const Emitter = {
  
  events: {},

  on(event, cb) {
    Emitter.events[event] = Emitter.events[event] || []
    Emitter.events[event].push(cb)
  },

  emit(event) {
    if (!Emitter.events[event]) return
    Emitter.events[event].forEach(event => event())
  }
}

export { Emitter }