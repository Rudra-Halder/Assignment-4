Job Tracker Dashboard

Project Description:

This is a job application tracking dashboard I built to keep my job hunt organized. It allows me to see all my applications in one place, move them into "Interview" or "Rejected" categories, and delete them if needed. The dashboard updates the counts at the top in real-time using JavaScript.



Features:

Live Stats: Real-time counters for Applied, Interview, and Rejected jobs.

Tab Filtering: Quickly switch between different job statuses.

Interactive Toggling: Move jobs between "Interview" and "Rejected" with a click.

Delete Cards: Fully functional delete button that updates all counts.

Empty State: A custom jobs.png image shows up whenever a category is empty.

Mobile Responsive: Built with Tailwind CSS so it works on any screen size.

Technical Questions & Answers:

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


getElementById grabs a single element using its ID. getElementsByClassName finds all elements with a certain class and gives you a list. querySelector is more flexible because you can use CSS-style selectors (like .class or #id) to find the first match. querySelectorAll finds every element that matches the selector and gives you a NodeList.

2. How do you create and insert a new element into the DOM?

 
I use document.createElement('tagName') to make the element in memory. Then I can add text to it using .innerText. Finally, I use .appendChild(newElement) to put it inside an existing parent element on the page.

3. What is Event Bubbling? And how does it work?

 
Event bubbling is when an event (like a click) starts at the element you clicked and then "bubbles" up to its parents, grandparents, and so on. It’s like the event travels from the specific child all the way up to the root of the document.

4. What is Event Delegation in JavaScript? Why is it useful?

 
Event delegation is putting one listener on a parent instead of putting many listeners on every child. It’s useful because it saves memory and it works for new elements that I add to the page later without needing to bind new events to them.

5. What is the difference between preventDefault() and stopPropagation() methods?

 
preventDefault() stops the browser's default action (like a link opening a page). stopPropagation() stops the event from bubbling up to parent elements, so the parent handlers don't get triggered by mistake.

How to Run:


Make sure index.html, style.css, script.js, and jobs.png are in the same folder.

Open index.html with Live Server in VS Code.
