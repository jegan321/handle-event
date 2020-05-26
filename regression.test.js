// Hacky way to load the library without adding Node.js module code
var handleEvent = require('./handle-event')

test('handle-click', function () {
  document.body.innerHTML = `
          <button handle-click="doSomething" type="button" id="btn"></button>
      `
  var eventHandled = false
  handleEvent('click', 'doSomething', () => {
      eventHandled = true
  })

  document.getElementById('btn').click()

  expect(eventHandled).toBe(true)
})


test('custom attribute prefix', function () {
  document.body.innerHTML = `
          <button @click="doSomething" type="button" id="btn"></button>
      `
  var eventHandled = false
  handleEvent('click', 'doSomething', () => {
      eventHandled = true
  })

  handleEvent.attributePrefix = '@'

  document.getElementById('btn').click()

  expect(eventHandled).toBe(true)
})