# Handle Event

Tiny function that allows you to easily add event handlers to your HTML which use event delegation behind the scenes. 

## Set up
Include the code in your project using a script tag or just copy and paste from handle-event.js. It's just one function.

```html
<script src="path/to/handle-event.js"></script>
```

## Usage
Add a handler in your JavaScript:
```js
handleEvent('click', 'doSomething', function (event) {
  console.log('clicked element: ' + event.target);
})
```
And an attribute to your HTML:
```html
<button type="button" handle-click="doSomething">Click Me</button>
```

Attributes should follow the pattern: handle-{type}="{name}" or data-handle-{type}="{name}" where type is the event type and name is the second argument given to the handleEvent function.
