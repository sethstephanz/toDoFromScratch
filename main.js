let deadlineInput = document.getElementById("deadlineInput");
let tasksInput = document.getElementById("tasksInput");
let createTask = document.getElementById("createTask"); //the button
let addTask = document.getElementById("addTask");
let addDeadline = document.getElementById("addDeadline");
let newTaskContent = document.getElementById("addTask");

createTask.addEventListener("click", function () {
  if (tasksInput.value.length == 0) {
    alert("Enter a new task!");
    return;
  }
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
    } else {
      let paragraph2 = document.createElement("p");
      let newParagraph2 = document.createTextNode("No Deadline");
      paragraph2.appendChild(newParagraph2);
      addDeadline.appendChild(paragraph2);
    }
  }
  //appending under Deadline
  let paragraph2 = document.createElement("p");
  let newParagraph2 = document.createTextNode(deadlineInput.value);
  paragraph2.appendChild(newParagraph2);
  addDeadline.appendChild(paragraph2);
  //wipes content after click
  tasksInput.value = "";
  deadlineInput.value = "";
  //appending under Countdown
  // let paragraph2 = document.createElement("p");
  // let newParagraph2 = document.createTextNode(coundown.value);
  // paragraph2.appendChild(newParagraph2);
  // addDeadline.appendChild(paragraph2);
  // //wipes content after click
  // tasksInput.value = "";
  // deadlineInput.value = "";
});

if (deadlineInput.value != null) {
  //source: https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
  function initializeClock(id, endtime) {
    const clock = document.getElementById(addCountdown);
    const timeinterval = setInterval(() => {
      const t = getTimeRemaining(endtime);
      clock.innerHTML =
        "days: " +
        t.days +
        "<br>" +
        "hours: " +
        t.hours +
        "<br>" +
        "minutes: " +
        t.minutes +
        "<br>" +
        "seconds: " +
        t.seconds;
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }, 1000);
  }
}
