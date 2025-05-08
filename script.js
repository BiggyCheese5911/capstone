let inventory = [];

function addInventory(){
    document.getElementById("show-inventory").style.display = "none";
    let newItem = document.getElementById('apn').value + ' ' +  document.getElementById('cpt').value + ' ' + ' ' + document.getElementById('cip').value;
    console.log(newItem);
    inventory.push(newItem);
    console.log(inventory);
    document.getElementById('aci').innerHTML = inventory;
}