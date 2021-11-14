const eventEmitter = {
  events: {},

  on(event, callback) {
    const events = Array.isArray(event)? event: [event];
    for (let e of events) {
      if (!this.events[e]) {
        this.events[e] = [];
      }
      this.events[e].push(callback);
    }
  },
  
  emit(event, value) {
    if (!this.events[event]) return;
    for (let callback of this.events[event]) {
      callback(value);
    }
  }
}

export default eventEmitter;