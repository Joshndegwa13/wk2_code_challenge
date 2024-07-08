const shoppingList = [];
const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
const listContainer = document.getElementById('listContainer');
const clearButton = document.getElementById('clearButton');

addButton.addEventListener('click', () => {
  const newItem = inputField.value.trim();
  if (newItem) {
    shoppingList.push(newItem);
    inputField.value = '';
    updateList();
  }
});

listContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('purchased');
  }
});

clearButton.addEventListener('click', () => {
  shoppingList.length = 0;
  updateList();
});

function updateList() {
  listContainer.innerHTML = '';
  shoppingList.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listContainer.appendChild(listItem);
  });
}

inputField.focus();