const insertButton = document.getElementById("enter");
const inputText = document.getElementById("input");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("il");

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

// deleted tasks handler
/*let deletedTasksArray = localStorage.getItem('deletedItems') ? JSON.parse(localStorage.getItem('deletedItems')) : []

localStorage.setItem('deletedItems', JSON.stringify(deletedTasksArray))
let deletedData = JSON.parse(localStorage.getItem('deletedItems'))

console.log("deletedTasksArray", deletedTasksArray)

*/

console.log("itemsArray", itemsArray);

localStorage.setItem('items', JSON.stringify(itemsArray))
let data = JSON.parse(localStorage.getItem('items'))


// check the length of an input text
inputLength = () => inputText.value.length;

// check the list length
listLength = () => item.length;

// create tasks function
createListElement = (text) => {
  let li = document.createElement("li");
  li.textContent = text
  ul.appendChild(li);

  // create the deleting button 
  let dBtn = document.createElement("button");
  dBtn.classList.add("delete-btn");
  dBtn.classList.add("fa", "fa-trash", "fa-6");
  li.appendChild(dBtn);

  //add the event listener to it
  deleteListItem = () => {

    li.classList.add("delete");

    //let deletedItemValue = li;
    //console.log("deleteListItem -> deletedItemValue", deletedItemValue.textContent)

    //deletedTasksArray.push(deletedItemValue.textContent);
    //localStorage.setItem('deletedItems', JSON.stringify(deletedTasksArray))
  }

  // in case of the task had been done
  taskDone = () => {
    li.classList.toggle("done");
    dBtn.classList.toggle("hideCross");
  }

  li.addEventListener("click", taskDone);

  //in case of deleting the task
  dBtn.addEventListener("click", deleteListItem);
  //console.log("atEnd -> localStorage", localStorage)


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
    createListElement();
  }

}

data.forEach(item => {
  createListElement(item)
})
//data.splice(2, 2);


/*for (let i = 0; i < data.length; i++) {

  for (let j = 0; j < deletedData.length; j++) {

    if (data[i] == deletedData[j]) {
      data.splice(i, 1);
      data = data;
    }
  }
  //console.log("data.length", data.length)

  if (data.length > 0) {
    createListElement(data[i])
  }
}
console.log("data", data)
console.log("deletedData", deletedData)

*/
insertButton.addEventListener("click", addListAfterBtn);

input.addEventListener("keypress", addListAfterEnterKey);


