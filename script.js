let inventory = [];

function addInventory() {
  if (
    document.getElementById("apn").value &&
    document.getElementById("cpt").value &&
    document.getElementById("cip").value
  ) {
    document.getElementById("show-inventory").style.display = "none";

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
  }
}

function filter(category) {
    console.log(category);
    let filtered = inventory.filter(item => {
        return item.productType.includes(category)
    });
    console.log(filtered);

    display(filtered)
};

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

function dlt(id){
    // inventory.splice(index, 1)
    let newIn = inventory.filter(item => item.id = id)
    console.log(newIn)
    display(inventory)

    filter()
}