# Inventory Manager Code Explanation
This document provides a detailed explanation of the Inventory Manager web application code. The application is a simple Inventory Manager made using HTML, CSS, and JavaScript.

## Table of Contents
- [Inventory Manager Code Explanation](#inventory-manager-code-explanation)
- [HTML Structure](#html-structure)
- [CSS Styling](#css-styling)
- [JavaScript Functionality](#javascript-functionality)
    - [DOM Elements](#dom-elements)
    - [Data Management](#data-management)
    - [Inventory Operations](#inventory-operations)
    - [UI Rendering](#ui-rendering)
    - [Event Handling](#event-handling)
- [Data Management](#data-management)
- [Event Flow](#event-flow)

## HTML Structure
This simple HTML structure holds the entire essential interface for the Task Manager Application to work properly:   

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inventory Manager</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="greet.js"></script>
    <script defer src="script.js"></script>
</head>
<body class="light">
  <h1>Inventory Manager</h1>
    <div id="search-container">
      <div class="search">
        <div id="search-side">
          <h2>Search For Inventory</h2>
          <hr>
          <p>Search for a product by name: </p>
          <input type="text" id="product-name" oninput="performSearch()">
          <br>
        </div>

      <div class="results">
        <h2>Results</h2>
        <hr>
        <p id="search-results">Results will appear here</p>
        <ul id="sr"></ul>
      </div>
      </div>
    </div>

  <h1>Current Inventory</h1>
  <div class="current-inventory">
      <button class="sb" onclick="filter('')">All Items</button>
      <button class="sb"  onclick="filter('Food')" id="all-items" id="food">Food</button>
      <button class="sb" onclick="filter('Utility')" id="utility">Utility</button>
      <button class="sb" onclick="filter('Clothing')" id="clothing">Clothing</button>
      <button class="sb" onclick="filter('Electronics')" id="electronics">Electronics</button>
      <button id="sb" onclick="changeTheme()">Light Mode</button>
      <button id="db" onclick="changeTheme()">Dark Mode</button>

      <h2 id="show-inventory">Inventory</h2>
      <p id="aci"></p>
      <hr>

      <h2>Add Inventory</h2>

    <div id="ad">
      <p>Give product name</p>
          <input type="text" id="apn">

          <p>Choose product type</p>
          <select multiple="" id="cpt">
            <option value="Food">Food</option>
            <option value="Utility" >Utility</option>
            <option value="Clothing" >Clothing</option>
            <option value="Electronics" >Electronics</option>
          </select>

          <p>Input item price</p>
          <input type="number" id="cip">
          <br>
      <button id="add-inventory" onclick="addInventory()">Add Inventory</button>
      </div>
  </div>
</body>
</html>
```

Key HTML Components:
- The body element includes an id for theme switching.
- A heading that displays the title.
- An input section with a text box to search your inventory for an item.
- An input section with a text field for naming the item, options for choosing item type, number input for choosing item price, and an "Add Inventory" button.
- An empty unordered list (`ul`) where items will be displayed when searched for.
- A message that shows when there are no items being searched for.
- Various buttons for filter functionality.
- A button for changing themes.

## CSS Styling
The CSS styling defines the visual appearance of the Task Manager for both themes.

``` css
*{
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

:root{
    --bg: white;
    --dbg: #232323;
}

.light{
    background-color: #e6e6e6;


.search{
    display: flex;
    justify-content: space-around;
}

input{
    border-radius: 10px;
}

#search-container{
    margin: 0 auto;
    height: 40%;
    width: 90%;
    background-color: var(--bg);
    border-radius: 25px;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    box-shadow: 5px 5px 5px black;
}

.current-inventory{
    margin: 0 auto;
    height: 40%;
    width: 90%;
    background-color: var(--bg);
    border-radius: 25px;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
    box-shadow: 3px 3px 3px black;

}

#search-side p{
    font-size: 20px;
}

h1{
    background-color: lightblue;
    border-radius: 20px;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    margin-bottom: 25px;
    box-shadow: 3px 3px 3px black;
}

h2{
    margin-top: 20px;
    font-size: 24px;
    padding: 20px;
    text-align: center;
}

option{
    font-size: 18px;
}

.results{
    font-size: 22px;
}

.sb{
    font-size: 22px;
    background-color: lightblue;
    transition: 0.3s;
    border-radius: 5px;
    box-shadow: 3px 3px 3px black;
}

.sb:hover{
    color: blue;
    background-color: white;
    /* margin: 5px; */
    cursor: pointer;
    box-shadow: 3px 3px 3px blue;
    font-size: 28px;
}

#add-inventory{
    font-size: 22px;
    background-color: salmon;
    transition: 0.3s;
    border-radius: 5px;
    margin-top: 10px;
    box-shadow: 3px 3px 3px black;
}

#add-inventory:hover{
    color: salmon;
    background-color: white;
    margin-top: 5px;
    cursor: pointer;
    box-shadow: 3px 3px 3px salmon;
    font-size: 25px;
}

#si{
    margin-top: 10px;
}

#ad{
    text-align: center;
    font-size: 16px;
}

#ad p{
    font-size: 20px;
}

.new-item{
    font-size: 22px;
    background-color: rgb(227, 226, 226);
    border-radius: 5px;
    padding: 5px;
    border: solid black 2px;
    margin: 5px;
    display: flex;
    justify-content: space-between;
    box-shadow: 3px 3px 3px black;
}

.add-btn{
    font-size: 22px;
    background-color: red;
    border-radius: 5px;
    padding: 3px;
    border: solid black 2px;
    transition: 0.3s;
    box-shadow: 3px 3px 3px black;
}

.add-btn:hover{
    background-color: white;
    color: red;
    box-shadow: 3px 3px 3px red;
    font-size: 25px;
}

#sb{
    font-size: 22px;
    background-color: blue;
    color: white;
    transition: 0.3s;
    border-radius: 5px;
    margin-bottom: 15px;
    box-shadow: 3px 3px 3px black;
}

#sb:hover{
    /* margin: 5px; */
    color: pink;
    background-color: black;
    box-shadow: 3px 3px 3px purple;
    font-size: 28px;
}

#db{
    font-size: 22px;
    background-color: black;
    color: pink;
    transition: 0.3s;
    border-radius: 5px;
    margin-bottom: 15px;
    box-shadow: 3px 3px 3px pink;
}

#db:hover{
    color: black;
    background-color: pink;
    box-shadow: 3px 3px 3px pink;
    font-size: 28px;
}
}

/*Dark Theme*/
.dark{
    background-color: black;


    .search{
        display: flex;
        justify-content: space-around;
    }
    
    #search-container{
        margin: 0 auto;
        height: 40%;
        width: 90%;
        background-color: var(--dbg);
        border-radius: 25px;
        padding: 10px;
        font-size: 16px;
        margin-bottom: 20px;
        box-shadow: 5px 5px 5px purple;
        color: white;
    }
    
    .current-inventory{
        margin: 0 auto;
        height: 40%;
        width: 90%;
        background-color: var(--dbg);
        border-radius: 25px;
        padding: 10px;
        font-size: 16px;
        margin-bottom: 10px;
        box-shadow: 3px 3px 3px purple;
        color: white;
    
    }
    
    #search-side p{
        font-size: 20px;
    }
    
    h1{
        background-color: darkorchid;
        border-radius: 20px;
        max-width: 400px;
        margin: 0 auto;
        text-align: center;
        padding: 10px;
        margin-bottom: 25px;
        box-shadow: 3px 3px 3px purple;
        color: white;
    }
    
    h2{
        margin-top: 20px;
        font-size: 24px;
        padding: 20px;
        text-align: center;
    }
    
    option{
        font-size: 18px;
    }
    
    .results{
        font-size: 22px;
    }
    
    .sb{
        font-size: 22px;
        background-color: darkorchid;
        transition: 0.3s;
        border-radius: 5px;
        box-shadow: 3px 3px 3px purple;
        color: white;
        border: 2px solid black;
    }
    
    .sb:hover{
        color: purple;
        background-color: white;
        /* margin: 5px; */
        cursor: pointer;
        box-shadow: 3px 3px 3px darkorchid;
        font-size: 28px;
    }
    
    #add-inventory{
        font-size: 22px;
        background-color: blue;
        color: white;
        transition: 0.3s;
        border-radius: 5px;
        margin-top: 10px;
        box-shadow: 3px 3px 3px white;
    }
    
    #add-inventory:hover{
        color: blue;
        background-color: white;
        margin-top: 5px;
        cursor: pointer;
        box-shadow: 3px 3px 3px blue;
        font-size: 25px;
    }
    
    #si{
        margin-top: 10px;
    }
    
    #ad{
        text-align: center;
        font-size: 16px;
    }
    
    #ad p{
        font-size: 20px;
    }
    
    .new-item{
        font-size: 22px;
        background-color: #0d0d0d;
        border-radius: 5px;
        padding: 5px;
        border: solid darkorchid 2px;
        margin: 5px;
        display: flex;
        justify-content: space-between;
        box-shadow: 3px 3px 3px purple;
    }
    
    .add-btn{
        font-size: 22px;
        background-color: red;
        border-radius: 5px;
        padding: 3px;
        border: solid white 2px;
        transition: 0.3s;
    }
    
    .add-btn:hover{
        background-color: white;
        color: red;
        border: solid red 2px;
        font-size: 25px;
    }
    
    #sb{
        font-size: 22px;
        background-color: blue;
        color: white;
        transition: 0.3s;
        border-radius: 5px;
        margin-bottom: 15px;
        box-shadow: 3px 3px 3px white;
    }
    
    #sb:hover{
        /* margin: 5px; */
        color: blue;
        background-color: white;
        box-shadow: 3px 3px 3px blue;
        font-size: 28px;
    }

    #db{
        font-size: 22px;
        background-color: black;
        color: pink;
        transition: 0.3s;
        border-radius: 5px;
        margin-bottom: 15px;
        box-shadow: 3px 3px 3px black;
    }
    
    #db:hover{
        color: black;
        background-color: pink;
        box-shadow: 3px 3px 3px black;
        font-size: 28px;
    }
}
```

Key CSS features:
1. **Reset Styles**: Sets default box-sizing and font for all elements.
2. **Input Section**: Uses a flexbox to position the input field and result section with text. Flexbox also positions all buttons properly.
3. **Inventory Items**: Styles each item with background color, spacing, boxshadow, and flexbox layout upon item creation.
4. **Button Styles**: Includes appearance for all buttons with a box shadow and a change in appearance when hovered over.
5. **Theme Switching**: Styles are changed depending on which theme is selected.
6. **Responsive Design**: Flexbox is used to ensure responsive design.

 ## JavaScript Functionality
The JavaScript code handles the user input when using the Inventory Manager Application:
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
The final section sets up event listeners:
- Click Handler for changing the theme.
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
The typical flow of the operation is:
1. User chooses item information and adds a new item -> `retrieveInventory()` -> `addInventory()` -> `display()`
2. User can search for an item in the inventory array -> `performSearch()`
3. User can use the filter functionality to only display items with a certain item type -> `filter()` -> `display()`
4. User clears all tasks -> `clearAllTasks()` -> `saveTasks()` -> `renderTasks()`

This pattern ensures that:
1. The data model (tasks array) is updates first.
2. Changes are persisted to localStorage
3. The UI is updated to reflect the current state.