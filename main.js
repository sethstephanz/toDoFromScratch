let deadlineInput = document.getElementById("deadlineInput");
let tasksInput = document.getElementById("tasksInput");
let createTask = document.getElementById("createTask");
let addTask = document.getElementById("addTask");
let addDeadline = document.getElementById("addDeadline");
let newTaskContent = document.getElementById("addTask").value;
let newDeadlineContent = document.getElementById("addDeadline").value;

createTask.addEventListener("click", function () {
  let paragraph = document.createElement("P");
  let newParagraph = document.createTextNode(newDeadlineContent);
  paragraph.appendChild(newParagraph);
  addTask.appendChild(paragraph);
  addDeadline.appendChild(paragraph);
});

// function myFunction() {
//   let para = document.createElement("P");
//   let t = document.createTextNode("This is a paragraph.");
//   para.appendChild(t);
//   document.getElementById("myDIV").appendChild(para);
// }
