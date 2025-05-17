# Inventory Manager JavaScript Code Explanation
This document provides a breakdown of the Inventory Manager web application javascript code. The application uses very simple JavaScript functions and methods.

## Table of Contents
- [Inventory Manager Code Explanation](#inventory-manager-code-explanation)
- [JavaScript Functionality](#javascript-functionality)
    - [Function Naming and Modularity](#function-naming-and-modularity)
    - [Variable Naming and Formatting](#variable-naming-and-formatting)
    - [Arrays and Object Usage](#arrays-and-object-usage)
    - [DOM Elements](#dom-elements)
    - [Data Management](#data-management)
    - [Inventory Operations](#inventory-operations)
    - [UI Rendering](#ui-rendering)
    - [Event Handling](#event-handling)
    - [Cookie Usage](#cookie-usage)
    - [Theme Switching](#theme-switching)
    - [Timer Functionality](#timer-functionality)
- [Data Management](#data-management)
- [Event Flow](#event-flow)
 ## JavaScript Functionality
The JavaScript code handles the user input when using the Inventory Manager Application:
 ### Variable Naming and Formatting
 ```javascript
    // camelCase naming
    const searchTerm = document.getElementById("product-name").value.toLowerCase();
    
    let itemValue = item.name.toLowerCase();

    // Proper indentation
    timerInterval = setInterval(() => {
       const seconds = Math.floor((Date.now() - startTime) / 1000);
       sessionStorage.setItem("time", seconds);
       updateTimerDisplay(seconds);
    }, 1000);
 ```
 - Proper variable naming and formatting leads to organized code.
 ### Function Naming and Modularity
 ```javascript
    function startTimer(){
        startTime = Date.now();
        sessionStorage.removeItem("time");
  
        timerInterval = setInterval(() => {
           const seconds = Math.floor((Date.now() - startTime) / 1000);
           sessionStorage.setItem("time", seconds);
           updateTimerDisplay(seconds);
        }, 1000);
    }
 ```
 - This timer function showcases both proper and clear naming as well as only serving one main purpose (beginning timer).
 ### DOM Elements
``` javascript
// DOM Elements
const lightBtn = document.getElementById('sb');
const darkBtn = document.getElementById('db');
const body = document.body;

if (
    document.getElementById("apn").value &&
    document.getElementById("cpt").value &&
    document.getElementById("cip").value
  ) {
    let newItem = {
        id: Date.now(),
      time: new Date().toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }),
      name: document.getElementById("apn").value,
      productType: document.getElementById("cpt").value,
      itemPrice: document.getElementById("cip").value,
    };
  };

// Inventory Array
let inventory = [];
```
Not many DOM elements are showcased due to the user managed nature of the web application. Most DOM elements are made via user input, however theme changing uses established DOM elements.

### Data Management
``` javascript
// Saves array to local storage when new item is created
localStorage.setItem('inventory', JSON.stringify(inventory))

// Deletes item from local storage when an item is deleted
localStorage.setItem('inventory', JSON.stringify(inventory))

// Saves theme preference in local storage
localStorage.setItem('theme', theme);

// Retreives item array and theme preference when application is opened
function retrieveInventory(){
  inventory = JSON.parse(localStorage.getItem('inventory')) || [];

  changeTheme(localStorage.getItem('theme'))
  display(inventory)
}
```
These function handle persistent storage:
- `localStorage.setItem`: Sets item array and theme preference into your local storage when the elements are interacted with.
- `retrieveInventory()`: Retrieves the theme preference and item array upon page load.
### Inventory Operations
``` javascript
// Add a new item to inventory array
function addInventory() {
  if (
    document.getElementById("apn").value &&
    document.getElementById("cpt").value &&
    document.getElementById("cip").value
  ) {
    let newItem = {
        id: Date.now(),
      time: new Date().toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }),
      name: document.getElementById("apn").value,
      productType: document.getElementById("cpt").value,
      itemPrice: document.getElementById("cip").value,
    };

    console.log(newItem);
    inventory.push(newItem);
    console.log(inventory);
    display(inventory)
  localStorage.setItem('inventory', JSON.stringify(inventory))

  }
}

// Filters array for selected filter
function filter(category) {
    console.log(category);
    let filtered = inventory.filter(item => {
        return item.productType.includes(category)
    });
    console.log(filtered);

    display(filtered)
};

// Deletes item from inventory array
function dlt(id){
    inventory = inventory.filter(item => item.id !== id)
    display(inventory)

    // Deletes item from local storage when an item is deleted
    localStorage.setItem('inventory', JSON.stringify(inventory))
}
```
These function implement the core item operations:
- `addInventory()`: Recieves the values from user input and sorts them into an object and places the object into the inventory array.
- `filter()`: Searches through the inventory array for objects types that match the filter you choose, then only display items matching those filters.
- `dlt(id()`: Removes an item by finding its id and filtering the array, then stringifies the inventory array to update local storage.
### UI Rendering
``` javascript
// Displays new item in the HTML
function display(items){
    document.getElementById("aci").innerHTML = "";
    items.forEach((item) => {
        let card = document.createElement("div");
        let btn = document.createElement("button");
     
        card.innerHTML = `Item Name: ${item.name} | Item Type: ${item.productType} | Item Price: $${item.itemPrice} | Entered On: ${item.time} <button class="add-btn" onclick="dlt(${item.id})">Delete</button>`;
        card.classList.add("new-item");
        document.getElementById("aci").append(card);
      });
}
```
This function handles UI updates:
- `display(items)`: Creates new div with all the information regarding the new item being created then appends the new div, including a class for CSS styling.
### Event Handling
```javascript
// Event Listeners
lightBtn.addEventListener('click', () => changeTheme('light'));
darkBtn.addEventListener('click', () => changeTheme('dark'));
```
This section sets up event listeners:
- Click Handler for changing the theme.
### Cookie Usage
```javascript
    function greetUser(){
    console.log(document.cookie)
    const hasVisitedBefore = document.cookie.includes('visitedBefore=true');
    if(hasVisitedBefore){
        alert("Welcome back to your Inventory Manager!📊");
    }else{
        const expDate = new Date();
        expDate.setDate(expDate.getDate() + 7);
        // console.log(expDate)
        document.cookie = `visitedBefore=true; expires=${expDate.toUTCString()}; path=/`;
        // console.log(document.cookie)
        alert("Welcome to Inventory Manager!📊");
    };
};
greetUser();
```
- This function creates a cookie to welcome the user if it is their first time using the site, or to welcome them back if they are returning.
## Theme Switching
```javascript
    const lightBtn = document.getElementById('sb');
    const darkBtn = document.getElementById('db');
    const body = document.body;

    function changeTheme(theme){
    if(theme === 'dark'){
        body.classList.remove('light');
        body.classList.add('dark')
        document.getElementById('db').style.display = 'none'
        document.getElementById('sb').style.display = 'inline'
    }else if(theme === 'light'){
        body.classList.remove('dark');
        body.classList.add('light');
        document.getElementById('db').style.display = 'inline'
        document.getElementById('sb').style.display = 'none'
    }
    localStorage.setItem('theme', theme);
    }
```
- Buttons allow for easy theme switching.
- When a theme is switched, the preference is stored in local storage.
### Timer Functionality
```javascript
    let startTime, timerInterval;

// timer function
function startTimer(){
  startTime = Date.now();
  sessionStorage.removeItem("time");
  
  timerInterval = setInterval(() => {
    const seconds = Math.floor((Date.now() - startTime) / 1000);
    sessionStorage.setItem("time", seconds);
    updateTimerDisplay(seconds);
  }, 1000);
}

// stop timer
function stopTimer(){
  clearInterval(timerInterval);
}

// format time
function getFormattedTime(){
  const seconds = +sessionStorage.getItem("time") || 0;
  return formatTime(seconds);
}

// update timer
function updateTimerDisplay(seconds){
  document.getElementById("timerDisplay").textContent = `Time: ${formatTime(seconds)}`;
}

// format seconds to Xm Yx
function formatTime(seconds){
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

startTimer()
```
- The `startTimer()` function is called as soon as the page loads, starting the timer immediately.
- The timer updates into an empty `p` element in the HTML.
- Time is formatted to be visible in minutes and seconds.
## Data Management
The application handles data in a very simple way:
1. **Item Object Structure**:
    ```javascript
        let newItem = {
        id: Date.now(),
      time: new Date().toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }),
      name: document.getElementById("apn").value,
      productType: document.getElementById("cpt").value,
      itemPrice: document.getElementById("cip").value,
    };
    ```
    - Date.now is used to create a unique id for every item.
2. **Storage Method**:
    - The aplication pushes the new object into `localStorage` as soon as it is created.
    - Items are stored as a JSON string and parsed back into the inventory array upon page load.
    - This allows the inventory array to persist even after the application is closed.
## Event Flow
The flow of the program is as follows:
1. When the page loads, a cookie is either created or retrieved depending on whether it is your first time opening the application or not -> `greetUser()`
2. After the user clicks off the initial welcome alert, the inventory array is retrieved from the local storage and the timer starts. User then chooses item information and adds a new item while saving it to local storage -> `retrieveInventory()` -> `startTimer()` -> `updateTimerDisplay()` -> `addInventory()` -> `display()`
3. User can search for an item in the inventory array -> `performSearch()`
4. User can use the filter functionality to only display items with a certain item type -> `filter()` -> `display()`
5. User can delete items from the inventory array -> `dlt()` -> `display()`

This pattern ensures that:
1. The array holds objects with clear parameters.
2. New items and theme preferneces are saved to local storage.
3. The UI is updated when a new item is added.
4. Live search functionlity is efficient and operational.