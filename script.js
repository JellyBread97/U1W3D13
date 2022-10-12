document
  .getElementById("newTask")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addNewTask();
    }
  });

/* EXERCISE 5: 
          Add a new task to the list.
          Suggestion:
          - Use document.getElementById to get the UL item and the input text
          - Use the document.createElement to create the new List Item
          - Append the child to the UL
      */
const addNewTask = function () {
  let newTask = document.createElement("li");
  newTask.innerText = document.getElementById("newTask").value;
  newTask.style.backgroundColor = document.getElementById("colorPicker").value;
  if (newTask.innerText === "") {
    return;
  }
  document.getElementById("myTaskList").appendChild(newTask);
  document.getElementById("newTask").value = "";
};

/* EXERCISE 6: 
          Create a method "removeLast" which removes the last item from the task list
      */
const removeLast = function () {
  let allLi = document.querySelectorAll("#myTaskList > li");
  allLi[allLi.length - 1].remove();
};

/* EXERCISE 7: 
          Create a method "removeFirst" which removes the first item from the task list
      */
const removeFirst = function () {
  document.querySelector("#myTaskList > li").remove();
};

/* EXERCISE 8: 
      Create a method "getTasksAsArray" which returns, and prints to the console an array containing the tasks as string
      */

/* EXERCISE 9:
      Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
      onchange event listener ad applies it as background to every list item
      */

/* ### EXTRA ### */

/* EXERCISE 10:
                Attach an eventListener to each new task you create. When the task receives the click it should be removed (only the clicked task should disappear)
      */

/* EXERCISE 11:
               Create a function "bubbleSort()" which sorts the task list alphabetically using the bubble sort algorithm
      */

/* #### Suggestion:
       - Break the code into many function for semplicity
       - Reuse the functions previously created */
