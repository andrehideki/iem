const eventEmitter = {
  events: {},

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  },
  
  emit(event, value) {
    if (!this.events[event]) return;
    for (let callback of this.events[event]) {
      callback(value);
    }
  }
}

export default eventEmitter;