Job Tracker - My Career Dashboard
Project Overview
This is a job application tracking dashboard I built to stay organized during a job search. I designed it to look like a professional Figma dashboard while using real JavaScript logic to handle the data. The goal was to master DOM manipulation and state management without using any frameworks.

My Features
Live Stats: The dashboard at the top (Applied, Interview, Rejected) updates the second you click a button or delete a job card.

Smart Tabs: I built a filtering system so you can switch between seeing "All Jobs," only your "Interviews," or your "Rejected" applications.

Status Toggle: You can switch a job’s status between "Interview" and "Rejected." When you do this, the card moves to the correct tab and the dashboard numbers update automatically.

Delete Cards: Each card has a trash icon. Clicking it removes the job from the system and lowers the total counts.

Empty State: If a tab has no jobs, I added a custom image (jobs.png) and a message so the user knows why the screen is empty.

Responsive Layout: I used Tailwind CSS to make sure the grid looks perfect on my phone, tablet, and laptop.

How to Run the Project
Make sure index.html, style.css, script.js, and jobs.png are all in the same folder.

Open index.html using the Live Server extension in VS Code.

Start tracking your applications!

Technical Questions & My Answers
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById is used when you want to grab one specific element using its unique ID. getElementsByClassName is for grabbing a whole group of elements that share a class. querySelector is my favorite because it's super flexible—you can use it for IDs, classes, or tags just like in CSS. querySelectorAll does the same thing as querySelector but it gives you every match it finds instead of just the first one.

2. How do you create and insert a new element into the DOM?
First, you create the element in memory using document.createElement(). Then you usually give it some text or HTML using .innerText or .innerHTML. To actually make it show up on the website, you have to "attach" it to a parent element using .appendChild() or .prepend().

3. What is Event Bubbling? And how does it work?
Event bubbling is the way an event moves through the HTML. When you click a button, that click event doesn't just happen on the button; it "bubbles" up to the parent container, then to the section, then to the whole body. It's like the event travels from the specific element up to the very top of the page.

4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is when you put one event listener on a parent element instead of putting listeners on every single child. It’s useful because it saves memory and makes the code faster. It also means if you add a "new" job card to the page later, the parent listener will still catch the clicks on it automatically.

5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the browser from doing what it usually does by default, like stopping a form from refreshing the page. stopPropagation() is different—it tells an event to stop "bubbling" up to the parents. It keeps the click from being heard by the rest of the page.

Reflections
The biggest challenge was making the dashboard counts stay accurate when toggling between statuses. I solved this by keeping all the job data in a single JavaScript array and re-rendering the UI whenever the data changed. This made sure the "Total Count" and the "Tab Count" were always in sync.
