// // timeout_vs_immediate.js
// setTimeout(() => {
//     console.log('timeout');
// }, 0);
   
// setImmediate(() => {
//     console.log('immediate');
// });


const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
  EventEmitter.call(this);

  // use nextTick to emit the event once a handler is assigned
  process.nextTick(() => {
      console.log('nextTick');
    this.emit('event');
  });
}

util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
});
