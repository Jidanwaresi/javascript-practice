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

// 11. Restaurant Kitchen Display (Intermediate)

// You are building a Kitchen Display System for a restaurant.
// Current orders:
// let orders = ["Table 2: Burger", "Table 5: Pizza"];
// Task:

// A new order comes in from Table 7 for "Pasta". Add it to the end of the queue.

// The chef finishes cooking the first order ("Table 2: Burger"). Remove it from the queue.

// A VIP customer at Table 1 orders a "Steak". The manager says it must be cooked immediately, so add it to the very front of the queue.

// Write the code sequentially for these 3 steps and print the final orders array.

// sol: 
//  let orders = ["Table 2: Burger", "Table 5: Pizza"];
//  orders.push("Table 7 : Pasta");
//  orders.shift();
//  orders.unshift("Table 1 : Steak");
//  console.log("final orders : ", orders); 

/////////////////////////////////////////////////////////////////////////////////////////////

// 12. Train Ticket Waiting List (PRO Level - All 4 Methods)

// English: You are managing a train ticket waiting list.
// Current list:
// let waitingList = ["Aman", "Rahul", "Priya"];

// Task:
// The first person in the line gets a confirmed ticket. Remove them from the front of the list.

// A new passenger "Rohan" joins the waiting list at the end.

// Suddenly, the person at the very end of the list realizes the train is too late and cancels their waitlist ticket. 
// Remove them from the end.

// An emergency VIP passenger "Neha" arrives. She gets top priority, so add her to the very front of the waiting list.

// sol:
// let waitingList = ["Aman", "Rahul", "Priya"];
// waitingList.shift();
// waitingList.push("Rohan");
// waitingList.pop();
// waitingList.unshift("Neha");
// console.log("final list: ", waitingList);

/////////////////////////////////////////////////////////////////////////////////////////////

// 13. Browser History (PRO Level - 2 Arrays)
// You are building a web browser's "Back" button logic using two arrays.
// Current state:
// let history = ["Google", "YouTube", "GitHub", "StackOverflow"];
// let forwardStack = [];

// Task: 
// The user clicks the "Back" button. This means they are leaving the current page (the last item in history). 
// You need to remove this last page from history and immediately push it into the forwardStack so they can go forward later if they want.
// Print both arrays at the end. (Hint: Remember the optimization trick!).

// //sol:
// let history = ["Google", "YouTube", "GitHub", "StackOverflow"];
// let forwardStack = [];
// forwardStack.push(history.pop());
// console.log(history);
// console.log(forwardStack);
/////////////////////////////////////////////////////////////////////////////////////////////

// 14. Clipboard Copy-Paste

// You are building a Clipboard (Copy-Paste) feature.

// let clipboard = ["Hello", "World", "React"];
// let documentText = ["I am learning"];

// Task: The user presses "Ctrl + V" (Paste). 
// This action should remove the most recently copied item from the clipboard (the last item) and instantly add it to the very end of the documentText.
// Rule: You must use the optimization trick (method inside a method) in a single line. No hardcoding. Print both arrays.

// Sol:
// let clipboard = ["Hello", "World", "React"];
// let documentText = ["I am learning"];
// documentText.push(clipboard.pop());
// console.log(clipboard);
// console.log(documentText);


/////////////////////////////////////////////////////////////////////////////////////////////

// 15. Email Draft to Outbox (Penalty 2 - Method inside Method)

// You are building an email client.
// let drafts = ["Draft 1", "Draft 2", "Important Email"];
// let outbox = ["Old Email"];

// Task: 
// The user clicks "Send" on their latest draft (the last item in drafts). 
// Remove it from drafts and instantly add it to the very front (beginning) of the outbox array so it sends first.
//  Use the one-line optimization trick (method inside a method). 
// Print both arrays.

// sol:
// let drafts = ["Draft 1", "Draft 2", "Important Email"];
// let outbox = ["Old Email"];
// outbox.unshift(drafts.pop());
// console.log(drafts);
// console.log(outbox);

/////////////////////////////////////////////////////////////////////////////////////////////

// 16. Video Render Queue (Penalty 3 - Method inside Method)

// You are building a video editing software.
// let renderQueue = ["Vlog.mp4", "Gaming.mp4"];
// let completed = ["Intro.mp4"];
// Task: 
// The software finishes rendering the first video in the queue (the very first item).
// Remove it from the front of renderQueue and instantly add it to the end of the completed array. 
// Use the one-line optimization trick. Print both arrays.

// // sol:
// let renderQueue = ["Vlog.mp4", "Gaming.mp4"];
// let completed = ["Intro.mp4"];
// completed.push(renderQueue.shift());
// console.log(renderQueue);
// console.log(completed);

/////////////////////////////////////////////////////////////////////////////////////////////

// 17. Music Playlist "Up Next" (Penalty 4 - Method inside Method)

// You are managing a music app's queue.
// let playlist = ["Song A", "Song B", "Song C"];
// let upNext = ["Ad"];

// Task: The user wants to play the very first song in the playlist right now, even before the "Ad". 
// Remove the first song from the front of the playlist and instantly add it to the very front of the upNext array. 
// Use the one-line optimization trick. 
// Print both arrays.

// sol:
// let playlist = ["Song A", "Song B", "Song C"];
// let upNext = ["Ad"];
// upNext.unshift(playlist.shift());
// console.log(playlist);
// console.log(upNext);

/////////////////////////////////////////////////////////////////////////////////////////////

// 18. Delivery Loading (Penalty 5 - Method inside Method)

// You are managing a delivery system.
// let warehouse = ["Order 1", "Order 2"];
// let truck = ["Order 3"];
// Task:
// Load the oldest order from the warehouse (the very front item) and put it at the very front of the truck. 
// Use the one-line optimization trick. Print both arrays.

// // sol:
// let warehouse = ["Order 1", "Order 2"];
// let truck = ["Order 3"];
// truck.unshift(warehouse.shift());
// console.log(warehouse);
// console.log(truck);

/////////////////////////////////////////////////////////////////////////////////////////////
//<--------SET 02------>//
// 19. Product Update (Intermediate - splice)

// You have an inventory list:
// let inventory = ["Laptop", "Mouse", "Keyboard", "Monitor"];

// You are informed that the item at index 2 is out of stock. 
// You have a variable: let targetIndex = 2;
// Task: You need to replace that specific item with "Headphones". 
// Use the splice() method along with the targetIndex variable (do not hardcode the number 2 inside splice!) to remove the old item and insert "Headphones" in that exact position.
// Print the updated inventory.
// sol:
// let inventory = ["Laptop", "Mouse", "Keyboard", "Monitor"];
// let targetIndex = 2;
// inventory.splice(targetIndex,1,"Headphone");
// console.log(inventory);

/////////////////////////////////////////////////////////////////////////////////////////////

// 20. Leaderboard Ranking (Beginner - sort)
// You are displaying a leaderboard of student names in alphabetical order (A-Z).
// Current list:
// let students = ["Zayan", "Aarav", "Kabir", "Diya"];
// Task: Use the sort() method to arrange their names alphabetically from A to Z, 
// and print the updated list.

// sol:
// let students = ["Zayan", "Aarav", "Kabir", "Diya"];
// students.sort();
// console.log(students);

/////////////////////////////////////////////////////////////////////////////////////////////

// 21. Chat History (Beginner - reverse)

// A messaging app stores messages from oldest to newest.
// Current list:
// let messages = ["Hi", "How are you?", "I am good"];
// Task: The UI needs to display them from newest to oldest (latest message at the top).
// Use the reverse() method to flip the array order and print the updated list.

// Sol:
// let messages = ["Hi", "How are you?", "I am good"];
// messages.reverse();
// console.log(messages);

/////////////////////////////////////////////////////////////////////////////////////////////

// 22. Delete Multiple Corrupted Files (Intermediate - splice)

// You are building a file manager app. 
// You found a sequence of corrupted files that need to be deleted.
// let files = ["file1.txt", "file2.txt", "corrupt1.txt", "corrupt2.txt", "corrupt3.txt", "file3.txt"];
// You have these variables:let startIndex = 2;let deleteCount = 3;
// Task: 
// Use the splice() method with these variables to remove exactly 3 corrupted files starting from the startIndex.
// You do not need to add any new items this time. Print the updated files array.

// sol:
// let files = ["file1.txt", "file2.txt", "corrupt1.txt", "corrupt2.txt", "corrupt3.txt", "file3.txt"];
// let startIndex = 2, deleteCount = 3;
// files.splice(startIndex,deleteCount);
// console.log(files)

/////////////////////////////////////////////////////////////////////////////////////////////


// 23. High Score Leaderboard (Intermediate - sort)

// You are building a game where the highest scores should appear at the very top.
// Current scores:let scores = [45, 90, 12, 78];
// Task: Sort the scores array in descending order (highest to lowest) using the sort() method and 
// print the updated array.
// (Hint: sort() by default treats items as strings, which can cause bugs when sorting numbers. 
// To sort numbers correctly, you need to pass a compare function (a, b) => ... inside it. 
// Think about how you can subtract them to get the descending order!)

// // Sol:
// let scores = [45, 90, 12, 78];
// scores.sort((a,b)=> b-a);
// console.log(scores);

/////////////////////////////////////////////////////////////////////////////////////////////

// 24. Insert Menu Item (Intermediate - splice)

// You are managing a cafe menu.let menu = ["Coffee", "Tea", "Cake"];
// You want to add "Sandwich" exactly between "Coffee" and "Tea". 
// You have: let insertIndex = 1;
// Task:
// Use the splice() method with the given variable to insert "Sandwich" at the insertIndex without deleting any existing items. 
// Print the updated menu array.

// // sol:
// let menu = ["Coffee", "Tea", "Cake"];
// let insertIndex = 1;
// menu.splice(insertIndex,0,"Sandwich");
// console.log(menu);

/////////////////////////////////////////////////////////////////////////////////////////////

// 25. Z-A Directory (Beginner - sort & reverse)

// You are building a directory where names must be displayed in reverse alphabetical order (Z to A).
// let names = ["Charlie", "Alice", "Bob"];
// Task: First, use the sort() method to arrange the names from A to Z. 
// Then, immediately use the reverse() method to flip the sorted array so it becomes Z to A. 
// Print the updated array

// sol:
// let names =["Charlie", "Alice", "Bob"];
// names.sort().reverse();
// console.log(names);

/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

// *** (Mixed Challenge 1/10) ***

// 26. E-commerce Cart & Wishlist 

// You are building an e-commerce app.
// let cart = ["Shoes", "Watch", "Bag"]; let wishlist = [];

// Task:
// The user adds "Sunglasses" to the very end of their cart.

// The user decides to save the first item in the cart for later.
// Remove it from the front of the cart and instantly add it to the front of the wishlist. 
// (You MUST use the one-line optimization trick here!).

// Finally, sort the cart alphabetically (A-Z) so the user can view items easily.
// Write the code sequentially for these 3 steps and print both arrays.

// // Sol:
// let cart = ["Shoes", "Watch", "Bag"]; 
// let wishlist = [];
// cart.push("Sunglasses");
// wishlist.unshift(cart.shift());
// cart.sort();
// console.log("Cart: ", cart);
// console.log("Wishlist: ", wishlist);

/////////////////////////////////////////////////////////////////////////////////////////////
