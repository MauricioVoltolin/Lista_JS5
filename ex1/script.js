let shoppingList = [];

function addItem() {
    const newItem = document.getElementById('item').value;
    if (newItem.trim() !== '') {
        shoppingList.push(newItem);
        updateList();
    }
}

function searchItem() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredList = shoppingList.filter(item => item.toLowerCase().includes(searchTerm));
    updateList(filteredList);
}

function removeItem(index) {
    shoppingList.splice(index, 1);
    updateList();
}

function updateList(items = shoppingList) {
    const listContainer = document.getElementById('listItems');
    listContainer.innerHTML = '';

    items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeItem(index);

        listItem.appendChild(removeButton);
        listContainer.appendChild(listItem);
    });
}
