// header section theme changing randomly
document.getElementById("theme-btn").addEventListener("click", function () {
    const bgBody = document.getElementById("bg-color");
    bgBody.style.backgroundColor = getRgbRamdomColor();
  });
  
  // Task Assigned Value change
  
  document.getElementById("mobile-btn-issu").addEventListener("click", function () {
      handleTaskCompletion("mobile-btn-issu", "task-assigned", "taskCount", "activity-log", "mobile-btn-issu-text");
  });
  
  document.getElementById("pay-btn").addEventListener("click", function () {
      handleTaskCompletion("pay-btn", "task-assigned", "taskCount", "activity-log", "pay-btn-text");
  });
  
  document.getElementById("rection-btn").addEventListener("click", function () {
      handleTaskCompletion("rection-btn", "task-assigned", "taskCount", "activity-log", "rection-text");
  });
  
// Task Assigned Value change

// document
//   .getElementById("mobile-btn-issu")
//   .addEventListener("click", function () {
//     let assignNumber = getIdStingToNumber("task-assigned");
//     let taskCount = getIdStingToNumber("taskCount");

//     document.getElementById("taskCount").innerText = taskCount + 1;
//     document.getElementById("task-assigned").innerText = assignNumber - 1;

//     let btn_mobile_issu = document.getElementById("mobile-btn-issu");
//     btn_mobile_issu.setAttribute("disabled", true);
//     btn_mobile_issu.style.opacity = "0.6";

//     let mbisutext = document.getElementById("mobile-btn-issu-text").innerText;
//     let pera = document.createElement("p");
//     pera.innerText = "Successfully complate task " + mbisutext;
//     pera.classList.add("activity-log");
    
//     document.getElementById("activity-log").appendChild(pera);
//     alert("Successfully complate task ", mbisutext);
//   });



