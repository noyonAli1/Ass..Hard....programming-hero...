1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById() is used to find one element using its unique ID.
getElementsByClassName() is used when multiple elements have the same class name.
querySelector() and querySelectorAll() use CSS selectors — querySelector() gives the first matching element, and querySelectorAll() gives all matching elements. These are more flexible because you can use different CSS selectors.

2. How do you create and insert a new element into the DOM?

Answer:
To create a new element in the DOM, first use document.createElement() to create the element. Then you can add text or content using innerText or innerHTML. After that, insert it into a parent element using appendChild() or append().

3. What is Event Bubbling? And how does it work?

Answer:
Event bubbling is when an event happens on an element first and then moves up to its parent elements. For example, if you click a button inside a div, the click event will happen on the button first and then on the div.

4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event delegation means adding an event listener to a parent element instead of adding it to each child element. The parent can detect which child triggered the event. It is useful because it saves memory, improves performance, and works even if new elements are added later.

5. What is the difference between preventDefault() and stopPropagation()?

Answer:
preventDefault() stops the browser’s default action, like stopping a form from submitting or preventing a page reload.
stopPropagation() stops the event from moving up to parent elements