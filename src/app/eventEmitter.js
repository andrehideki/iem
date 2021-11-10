const eventEmitter = {
  events: {},

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  },
  
  emit(event) {
    if (!this.events[event]) return;
    for (let callback of this.events[event]) {
      callback();
    }
  }
}

export default eventEmitter;