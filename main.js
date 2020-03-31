const insertButton = document.getElementById("enter");
const inputText = document.getElementById("input");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("il");

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
localStorage.setItem('items', JSON.stringify(itemsArray))
let data = JSON.parse(localStorage.getItem('items'))


// check the length of an input text
inputLength = () => inputText.value.length;

// check the list length
listLength = () => item.length;

// create tasks function
let dBtns = [];

createListElement = (text) => {
  let li = document.createElement("li");
  li.textContent = text
  ul.appendChild(li);


  // create the deleting button 
  let dBtn = document.createElement("button");
  dBtns.push(dBtn);

  dBtn.classList.add("delete-btn");
  dBtn.classList.add("fa", "fa-trash", "fa-6");
  li.appendChild(dBtn);

  //add the event listener to it
  deleteListItem = () => {

    const index = itemsArray.indexOf(li.textContent);
    itemsArray.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(itemsArray))
    li.classList.add("delete");
  }

  // in case of the task had been done
  taskDone = () => {
    li.classList.toggle("done");
    dBtn.classList.toggle("hideCross");
  }

  li.addEventListener("click", taskDone);

  //in case of deleting the task
  dBtn.addEventListener("click", deleteListItem);
}
// add items events 

addListAfterBtn = () => {
  if (inputLength() > 0 && inputText.value.trim()) {
    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    createListElement(input.value)
    input.value = ''
  }
}

addListAfterEnterKey = (event) => {
  if (inputLength() > 0 && event.which === 13 && inputText.value.trim()) {
    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    createListElement(input.value)
    input.value = ''
  }

}

data.forEach(item => {
  createListElement(item)
})

insertButton.addEventListener("click", addListAfterBtn);

input.addEventListener("keypress", addListAfterEnterKey);


