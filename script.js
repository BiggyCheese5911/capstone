let inventory = [];

function addInventory(){
    document.getElementById("show-inventory").style.display = "none";

    let newItem = {
        name: document.getElementById('apn').value,
        productType: document.getElementById('cpt').value,
        itemPrice: document.getElementById('cip').value
    }

    console.log(newItem);
    inventory.push(newItem);
    console.log(inventory);
    document.getElementById('aci').innerHTML = "";

    if(document.getElementById('apn').value && document.getElementById('cpt').value && document.getElementById('cip').value){inventory.forEach(item => {
        let card = document.createElement('div');
        let btn = document.createElement('button')
        // card.innerHTML = item.name + ' ' + item.productType + ' ' + '$' + item.itemPrice;
        card.innerHTML = `${item.name} ${item.productType} $${item.itemPrice} <button class="add-btn" onclick="dlt()">Delete</button>`;
        card.classList.add("new-item");
        document.getElementById('aci').append(card);
    })}
}

function dlt(){
    inventory.splice();
}