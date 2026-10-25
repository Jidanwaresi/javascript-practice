// 1. Shopping Cart (Beginner)
// You are building an e-commerce site. A user adds items to their cart:
// let cart = ["Shirt", "Shoes", "Watch"];
// Suddenly, the user realizes, "Oh, I don't need the last item I added!"
// Task: Remove the very last product from the cart and print the updated cart.

// Sol :
// let cart= ["Shirt", "Shoes", "Watch"];
// cart.pop();
// console.log(cart);

/////////////////////////////////////////////////////////////////////////////////////////////

// 2. Notification Feed (Beginner)
// When a new notification arrives on Facebook or Instagram, it appears at the very top of the list, not at the bottom.
// You have some old notifications:
// let notifications = ["John liked your photo", "Alice commented on your post"];
// Task: Add a new notification "Alex started following you" at the very top (beginning) of the list.

// Sol:
// let notifications = ["John liked your photo", "Alice commented on your post"];
// notifications.unshift("Alex started following you");
// console.log(notifications);

/////////////////////////////////////////////////////////////////////////////////////////////

// 3. Customer Support Queue (Intermediate)
// English: You are building a customer support chat system.
// The rule is "First In, First Out" (the one who arrives first gets served first).
// The chat queue is:
// let queue = ["Customer 1", "Customer 2", "Customer 3"];
// Task:
// The first customer (Customer 1)'s issue is resolved. Remove them from the line.
// After that, a new customer ("Customer 4") arrives.
// Add them to the very end of the line.

// sol:
// let queue = ["Customer 1", "Customer 2", "Customer 3"];
// queue.shift();
// console.log(queue);
// queue.push("Customer 4");
// console.log(queue);

/////////////////////////////////////////////////////////////////////////////////////////////

// 4. Undo Feature (Intermediate)
// In VS Code or any text editor, we use Ctrl+Z (Undo).

// A user has taken several consecutive actions:
// let actions = ["Typed 'Hello'", "Made text bold", "Changed color to red"];
// Task: The user clicked the Undo button. This means their most recent (last) action needs to be canceled.
// Delete the last action and show what actions are left in the history.

// sol:
// let actions = ["Typed 'Hello'", "Made text bold", "Changed color to red"];
// actions.pop();
// console.log(actions);

/////////////////////////////////////////////////////////////////////////////////////////////

// 5. Recent Searches (PRO Level)
// On YouTube or Google, our search history has a "Recent Search" section.
// New searches appear at the top, and if the history gets too long, the oldest searches at the bottom are deleted.
// Assume your system can save a maximum of 3 searches.
// Current search history:
// let recentSearches = ["React tutorial", "JS array methods", "How to center a div"];
// Task: The user searches for a new topic: "Next js crash course".
// Write the logic so that the new search is added at the very beginning, but since the history cannot hold more than 3 items, the oldest item at the very end is automatically removed. (You will use this logic a lot in React).

// Sol:
// let recentSearches = [
//   "React tutorial",
//   "JS array methods",
//   "How to center a div",
// ];
// recentSearches.unshift("Next js crash course");
// if (recentSearches.length > 3) recentSearches.pop();
// console.log(recentSearches);

/////////////////////////////////////////////////////////////////////////////////////////////

// 6. Recent Call Log (PRO Level)

// English: You are designing a mobile phone's "Recent Calls" feature. To keep the UI clean, it only shows the 4 most recent calls.
// New calls appear at the top of the list. The oldest call gets removed from the bottom if the limit is exceeded.
// Current log: let callLog = ["Mom", "Rahul", "Unknown Number", "Aman"];
// Task: A new call comes in from "Dad". Write the logic to add this call to the top of the log, and since it can only hold 4 calls, 
// remove the oldest one from the bottom. Print the updated callLog.

// Sol:
// let callLog = ["Mom", "Rahul", "Unknown Number", "Aman"];
// callLog.unshift("Dad");
// if(callLog.length>4) callLog.pop();
// console.log(callLog);

/////////////////////////////////////////////////////////////////////////////////////////////

// 7. VIP Cinema Ticket Queue (Intermediate)

// You are managing a ticket queue for a cinema.
// Current queue: let queue = ["Rahul", "Aman", "Rohan"];
// Task: Three things happen in order:

// A normal customer "Sneha" joins the line. (She must go to the end).

// A VIP customer "Kabir" arrives. VIPs don't wait; they get special entry at the very front of the line.

// The ticket counter opens and serves the first person in the line (removing them from the queue).

// Write the code step-by-step for these 3 consecutive actions and print the final queue.

// // Sol:
// let queue = ["Rahul", "Aman", "Rohan"];
// queue.push("Sneha");
// queue.unshift("Kabir");
// queue.shift();
// console.log(queue);


/////////////////////////////////////////////////////////////////////////////////////////////
// 8. Gallery to Trash Bin (PRO Level - 2 Arrays)

// On mobile phones, when we delete a photo, it doesn't disappear permanently;
// it goes to the "Recently Deleted" (Trash) folder.
// You have two arrays:
// let gallery = ["Pic1.jpg", "Pic2.jpg", "Pic3.jpg"];
// let trashBin = [];

// Task: The user wants to delete their most recently taken photo (the last photo in the gallery). 
// You need to remove that photo from the gallery array, and immediately add that exact photo to the trashBin array. 
// (Hint: Keep in mind what the removing method returns). Print both gallery and trashBin at the end.


//SOL:
// let gallery = ["Pic1.jpg", "Pic2.jpg", "Pic3.jpg"];
// let trashBin = [];
// let deletePhoto = gallery.pop();
// trashBin.unshift(deletePhoto);
// console.log("Gallery : ", gallery);
// console.log("Recycle Bin: ", trashBin);

/////////////////////////////////////////////////////////////////////////////////////////////

// 9. Task Manager (Intermediate)
// You are building a Task Management App (like Trello).
// Current pending tasks:
// let tasks = ["Fix bug", "Write documentation"];
// Task:
// A high-priority task "Server crash" arrives. It must be addressed immediately, so add it to the very front of the list.
// You successfully complete the first task on the list. Remove it.

// A new normal-priority task "Update CSS" comes in. Add it to the end of the list.
// Write the code for these 3 steps sequentially and print the final tasks array.

// sol:
// let tasks = ["Fix bug", "Write documentation"];
// tasks.unshift("Server crash");
// console.log(tasks);
// tasks.shift();
// tasks.push("Update CSS");
// console.log(tasks)

/////////////////////////////////////////////////////////////////////////////////////////////

// 10. Music Player Queue (PRO Level)

// You are building a Music Player app (like Spotify).
// Current queue:
// let queue = ["Song 1", "Song 2", "Song 3"];

// Task:
// The first song finishes playing, so remove it from the queue.

// The user clicks "Play Next" on "Song 4". Add it to the very front of the queue so it plays right away.

// The user clicks "Add to Queue" on "Song 5". Add it to the very end of the queue.

// Write the code for these 3 steps sequentially and print the final queue

// SOL :
// let queue = ["Song 1", "Song 2", "Song 3"];
// queue.shift();
// queue.unshift("Song 4");
// queue.push("Song 5");
// console.log(queue);

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////