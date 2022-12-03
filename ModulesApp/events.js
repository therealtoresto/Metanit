'use strict';

const EventEmitter = require('events');
const Emitter = require('events');
// const util = require('util');

const emitter = new Emitter();
const eventName = 'greet';

emitter.on(eventName, () => console.log('Hello all!'));
emitter.on(eventName, (data) => console.log(data));

emitter.emit(eventName, 'Hi, bro!');

// function User() {};
// util.inherits(User, EventEmitter);

// User.prototype.sayHi = function(data) { 
//   this.emit(eventName, data);
// };

class User extends EventEmitter {
  sayHi(data) {
    this.emit(eventName, data);
  }
}

const user = new User();
user.on(eventName, (data) => console.log(data));

user.sayHi('I need your clothes!');