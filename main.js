const insertButton = document.getElementById("enter");
// console.log("insertButton", insertButton)
const inputText = document.getElementById("input");
// console.log("inputText", inputText)
const ul = document.querySelector("ul");
// console.log("ul", ul)
const item = document.getElementsByTagName("il");
// console.log("item", item)

// check the length of an input text
inputLength = () => inputText.value.length;
// console.log("inputLength", inputLength())
// check the list length
listLength = () => item.length;
// console.log("listLength", listLength())

// create tasks function
createListElement = () => {
  // console.log("create element");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  // create the deleting button 
  let dBtn = document.createElement("button");
  dBtn.classList.add("delete-btn");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);

  //add the event listener to it
  deleteListItem = () => {
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
    createListElement();
  }
}

addListAfterEnterKey = (event) => {
  if (inputLength() > 0 && event.which === 13 && inputText.value.trim()) {
    createListElement();
  }

}
insertButton.addEventListener("click", addListAfterBtn);

input.addEventListener("keypress", addListAfterEnterKey);