### 1\. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:  getElementById is used to returns only one single element and it is very fast.
         getElementsByClassName is used to returns HTMLCollection which is multiple element and it is live.
         querySelector returns the first matching element, and example: document.querySelector(".className");
         querySelectorAll returns a NodeList that can be multiple. Example : document.querySelectorAll(".item");
### 2\. How do you create and insert a new element into the DOM?

answer: Use document.createElement() to create a new element in memory.
         Insert it into the DOM using append(), appendChild(), prepend(), before(), or after().

         
### 3\. What is Event Bubbling? And how does it work?
answer: Event Bubbling is when an event starts on the target element and then moves upward through its parent elements.If you click a button inside a div, the click event runs         on the button first, then the div, then higher ancestors.

### 4\. What is Event Delegation in JavaScript? Why is it useful?
Answer:  Event Delegation is a technique where you add one event listener to a parent element instead of adding listeners to multiple child elements.It is useful because it             improves performance and works automatically for dynamically added elements.

### 5\. What is the difference between preventDefault() and stopPropagation() methods?
Answer:  preventDefault() stops the browser’s default action .
         stopPropagation() stops the event from bubbling up to parent elements.

