/*var http = require('http');
var event=require('events');
var eventEmiter=new events.eventEmiter();
var myEventHandler=function()
{
    console.log('created new Event');
}
eventEmiter.on('event',myEventHandler);
eventEmiter.emit('event');
*/
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

