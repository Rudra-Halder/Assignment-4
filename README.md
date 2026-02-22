🚀 Job Tracker Dashboard
A modern, responsive web application designed to help job seekers track their applications in one centralized location. This project focuses on dynamic DOM manipulation, state management, and professional UI design.

🌟 Features
Real-time Statistics: A dashboard header that tracks the total number of applications, interviews, and rejections.

Dynamic Filtering: Three distinct tabs (All Jobs, Interview, Rejected) to sort your progress.

Interactive Status Toggling: Move a job card from "All" to "Interview" or "Rejected" with a single click, which instantly updates the dashboard counts.

Delete Functionality: Remove job applications permanently from the UI and the data array.

Empty State Management: Displays a custom jobs.png illustration and helpful text when a category has no data.

Fully Responsive: A Figma-inspired layout that adapts seamlessly from desktop monitors to mobile screens.

🛠️ Technology Stack
HTML5: Structural foundation.

Tailwind CSS: For professional, utility-first styling and responsiveness.

Vanilla JavaScript: Core logic for state management, filtering, and DOM updates.

Font Awesome: Scalable vector icons for a polished look.

⚙️ Setup Instructions
Clone or Download: Save the project folder to your local machine.

File Structure: Ensure index.html, style.css, script.js, and jobs.png are all in the same root directory.

Run the App:

Open VS Code.

Right-click index.html and select "Open with Live Server".

The dashboard will launch in your default browser at http://127.0.0.1:5500.

🧠 Technical Q&A
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById is used to find one specific element that has a unique ID; it is the fastest selection method.

getElementsByClassName returns a live collection of all elements with a specific class name.

querySelector is more modern and flexible, allowing you to find the first element that matches any CSS selector (like .class, #id, or div > p).

querySelectorAll is used when you want to find every element that matches a CSS selector, returning them as a static NodeList.

2. How do you create and insert a new element into the DOM?
To add something new to a page, you first use document.createElement('tagName') to create the element in the browser's memory. You then add content or classes to it (like element.innerText = "Hello"). Finally, you use a method like appendChild() or prepend() to attach that new element to an existing parent element already on the page.

3. What is Event Bubbling? And how does it work?
Event Bubbling is the process where an event starts at the most specific element (the one you clicked) and then "bubbles up" to its parents. For example, if you click a button inside a div, the click event triggers on the button first, then moves to the div, then to the body, and finally to the document.

4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where you put a single event listener on a parent element instead of putting listeners on every single child. It is useful because it saves memory and allows the code to work automatically for new child elements that are added to the page later without needing to attach new listeners to them.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the browser's default behavior. For example, it prevents a link from opening a URL or a form from refreshing the page.

stopPropagation() stops an event from "bubbling" up the DOM tree. It prevents parent elements from being notified that the event happened.
