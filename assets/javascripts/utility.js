function getRgbRamdomColor() {
  let r = Math.floor(Math.random() * (255 - 100 + 1)) + 100;
  let g = Math.floor(Math.random() * (255 - 100 + 1)) + 100;
  let b = Math.floor(Math.random() * (255 - 100 + 1)) + 100;

  return "rgb(" + r + "," + g + "," + b + ")";
}

function getIdStingToNumber(id) {
  let str = document.getElementById(id).innerText;
  return (strToInt = parseInt(str));
}

function handleTaskCompletion(
  taskBtnId,
  taskAssignedId,
  taskCountId,
  logContainerId,
  textContainerId
) {
  let assignNumber = getIdStingToNumber(taskAssignedId);
  let taskCount = getIdStingToNumber(taskCountId);

  // Task সংখ্যা আপডেট
  document.getElementById(taskCountId).innerText = taskCount + 1;
  document.getElementById(taskAssignedId).innerText = assignNumber - 1;

  // বাটন ডিজেবল করা
  let btn = document.getElementById(taskBtnId);
  btn.setAttribute("disabled", true);
  btn.style.opacity = "0.6";

  // Log Message তৈরি করা
  let mbisutext = document.getElementById(textContainerId).innerText;
  let pera = document.createElement("p");
  pera.innerText = "completed task " + mbisutext+ " "+ getCurrentTime();
  pera.classList.add("activity-log");

  document.getElementById(logContainerId).appendChild(pera);
  alert("Completed task " + mbisutext);
}

function updateDate() {
  const today = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[today.getDay()];
  const monthName = today.toLocaleDateString("en-US", { month: "long" });
  const day = today.getDate();
  const year = today.getFullYear();
  document.getElementById("weekly-name").innerText = dayName;
  document.getElementById("date").innerText = monthName+" " + day +" " + year;
}
updateDate();

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
}

