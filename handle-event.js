(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.handleEvent = factory());
}(this, (function () { 'use strict';

/**
 * Adds an event handler to be called using the event delegation technique. The HTML
 * element that should trigger the handler needs to have an attribute following this
 * pattern: handle-{type}="{name}"
 * 
 * @param {String} type The type of event to handle, such as click or submit
 * @param {String} name A name for the handler
 * @param {Function} callback The handler function that will be called
 */
var handleEvent = function (type, name, callback) {

  // This can be changed by the user
  handleEvent.attributePrefix = 'handle-';

  if (!handleEvent.handlers) {
    handleEvent.handlers = [];
  }

  // If the event type hasn't been registered yet, set up event delegation
  if (!handleEvent.handlers[type]) {

    handleEvent.handlers[type] = {};

    // Add event listener that calls the handlers in the map if the
    // element has the attribute handle-{type} or data-handle-{type}
    document.addEventListener(type, function (event) {
      var el = event.target;
      var attributeName = handleEvent.attributePrefix + type;
      if (el.hasAttribute(attributeName)) {
        var handlerName = el.getAttribute(attributeName);
        var handler = handleEvent.handlers[type][handlerName];
        if (handler && typeof handler === 'function') {
          handler(event);
        }
      }
    })
  }

  // Register the callback as a handler 
  handleEvent.handlers[type][name] = callback;
}

return handleEvent;

})));
