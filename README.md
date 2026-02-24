1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:--
It is used to select a specific element by its id. Since an id is usually unique, it returns only one element,,,If the same class name exists in multiple places, this method selects all those elements together. So it can return multiple elements,,It uses CSS selectors to find elements. But it returns only the first matching element, not all,,It also uses CSS selectors, but it returns all matching elements. You can select by tag name, class, id, etc,,


2. How do you create and insert a new element into the DOM?
Answer:--
First, a new element like a div or h1 is created using JavaScript (usually with document.createElement()). Then we can add text using innerText or add HTML content using innerHTML. After that, we use document.appendChild() or similar methods to insert the new element into the web page.


3. What is Event Bubbling? And how does it work?
Answer:--
Event Bubbling is a process where, when an event occurs on an element (like a click), it first works on that element. Then it moves step by step to its parent element, then to the upper parent elements.


4. What is Event Delegation in JavaScript? Why is it useful?
Answer:--
Event Delegation means instead of adding an event to each element separately, we add the event once to their parent element. Then when an event occurs on a child element, it goes up to the parent, and the parent’s event listener works.


5. What is the difference between preventDefault() and stopPropagation()?
Answer:--
preventDefault() stops the browser’s default action, like stopping a form from submitting or preventing a page reload.
stopPropagation() stops the event from moving up to parent elements,