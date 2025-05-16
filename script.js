let inventory = [];

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


// Displays new item in the HTML
function display(items){
    document.getElementById("aci").innerHTML = "";
    items.forEach((item) => {
        let card = document.createElement("div");
        let btn = document.createElement("button");
     
        // card.innerHTML = item.name + ' ' + item.productType + ' ' + '$' + item.itemPrice;
        card.innerHTML = `Item Name: ${item.name} | Item Type: ${item.productType} | Item Price: $${item.itemPrice} | Entered On: ${item.time} <button class="add-btn" onclick="dlt(${item.id})">Delete</button>`;
        card.classList.add("new-item");
        document.getElementById("aci").append(card);
      });
}

// Deletes item from inventory array
function dlt(id){
    // inventory.splice(index, 1)
    inventory = inventory.filter(item => item.id !== id)
    display(inventory)

    // Deletes item from local storage when an item is deleted
    localStorage.setItem('inventory', JSON.stringify(inventory))

    // filter()
}

function performSearch(){
  const searchTerm = document.getElementById("product-name").value.toLowerCase();

  let filteredItems = inventory.filter((item) => {
    let itemValue = item.name.toLowerCase();
    console.log(itemValue);

    return itemValue.includes(searchTerm.toLowerCase())
  });

  console.log(filteredItems)
  // displayItems(filteredItems);

  let html = ""
  filteredItems.forEach(item => {
    html += `Item Name: ${item.name} | Item Type: ${item.productType} | Item Price: $${item.itemPrice} | Entered On: ${item.time} <hr>`;
    // card.classList.add("new-item");
  })

  document.getElementById('search-results').innerHTML = html;
  
  if(document.getElementById('product-name')){
    html == ""
  }
}

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

// Event Listeners
lightBtn.addEventListener('click', () => changeTheme('light'));
darkBtn.addEventListener('click', () => changeTheme('dark'));

function retrieveInventory(){
  inventory = JSON.parse(localStorage.getItem('inventory')) || [];

  changeTheme(localStorage.getItem('theme'))
  display(inventory)
}
retrieveInventory()
changeTheme()