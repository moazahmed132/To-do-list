const insertButton = document.getElementById("enter");
console.log("insertButton", insertButton)
const inputText = document.getElementById("input");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("il");

// check the length of an input text
inputLength = () => inputText.value.length;
console.log(inputLength);
// check the list length
listLength = () => item.length;

// create tasks function
createListElement = () => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  lu.appendChild(li);
  input.value = "";
}

// in case of the task had been done

TaskDone = () => {
  li.classList.toggle("done");
}

li.addEventListener("click", TaskDone);

//in case of deleting the task
// create the deleting button 
let dBtn = document.createElement("button");
dBtn.appendChild(document.createTextNode("X"));
li.appendChild(dBtn);

//add the event listener to it
dBtn.addEventListener("click", deleteListItem);
deleteListItem = () => {
  li.classList.add("delete")
}

// add items events 

addListAfterBtn = () => {
  if (inputLength() > 0) {
    createElement();
  }
}

addListAfterEnterKey = (event) => {
  if (inputLength() > 0 && event.which === 13) {
    createElement();
  }

}
insertButton.addEventListener("click", addListAfterBtn);

input.addEventListener("keypress", addListAfterEnterKey);