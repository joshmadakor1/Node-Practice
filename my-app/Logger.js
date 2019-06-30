const EventEmitter = require("events");
class Logger extends EventEmitter {
  log(message) {
    this.emit("messageLogged", { msg: message });
  }
}
module.exports = Logger;
/*const EventEmitter = require("events");
const emitter = new EventEmitter();

class Logger extends EventEmitter {
  log(message) {
    this.emit("messageLogged", { msg: message });
  }
}

module.exports = Logger;
*/
