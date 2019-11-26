// Hacky way to load the library without adding Node.js module code
var fs = require('fs');
eval(fs.readFileSync('handle-event.js')+'');

test('regression', function () {
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
