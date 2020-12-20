let deadlineInput = document.getElementById("deadlineInput");
let tasksInput = document.getElementById("tasksInput");
let createTask = document.getElementById("createTask"); //the button
let addTask = document.getElementById("addTask");
let addDeadline = document.getElementById("addDeadline");
let newTaskContent = document.getElementById("addTask");

createTask.addEventListener("click", function () {
  //appending under Tasks
  let paragraph = document.createElement("p");
  let newParagraph = document.createTextNode(tasksInput.value);
  paragraph.appendChild(newParagraph);
  addTask.appendChild(paragraph);
  //task without deadline handler
  if (deadlineInput.value.length == 0) {
    let confirm = window.confirm("Does this task have a deadline?");
    if (confirm == true) {
      let newTime = window.prompt("What is the deadline?");
      addDeadline.value += newTime;
    }
  }
  //appending under Deadline
  let paragraph2 = document.createElement("p");
  let newParagraph2 = document.createTextNode(deadlineInput.value);
  paragraph2.appendChild(newParagraph2);
  addDeadline.appendChild(paragraph2);
  //wipes content after click
  tasksInput.value = "";
  // deadlineInput.value = "";
});

// add this to deadline column whenever new deadline is entered <script src="countdownTimer.js"></script>
