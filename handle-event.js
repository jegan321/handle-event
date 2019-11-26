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
