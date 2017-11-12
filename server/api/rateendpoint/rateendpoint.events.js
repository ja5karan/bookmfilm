/**
 * Rateendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Rateendpoint from './rateendpoint.model';
var RateendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RateendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Rateendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    RateendpointEvents.emit(event + ':' + doc._id, doc);
    RateendpointEvents.emit(event, doc);
  }
}

export default RateendpointEvents;
