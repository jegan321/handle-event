/**
 * Adds an event handler to be called using the event delegation technique. The HTML
 * element that should trigger the handler needs to have an attribute following this
 * pattern: handle-{type}="{name}"
 * 
 * For example, an event handler can be added like this:
 * handleEvent('click', 'doSomething', function (event) {
 *   console.log('clicked element: ' + event.target)
 * })
 * 
 * And the HTML will have the corresponding attribute like this:
 * <button type="button" handle-click="doSomething">Click Me</button>
 * 
 * @param {String} type The type of event to handle, such as click or submit
 * @param {String} name A name for the handler
 * @param {Function} callback The function that will be called when the event happens
 */
var handleEvent = function (type, name, callback) {
  if (!handleEvent.handlers[type]) {
    handleEvent.handlers[type] = {}
    document.addEventListener(type, function (event) {
      var attributeName = 'handle-' + type
      if (event.target.matches('[' + attributeName + ']')) {
        var name = event.target.getAttribute(attributeName)
        var handler = handleEvent.handlers[type][name]
        if (handler) {
          handler(event)
        }
      }
    })
  }
  handleEvent.handlers[type][name] = callback
}
handleEvent.handlers = []
