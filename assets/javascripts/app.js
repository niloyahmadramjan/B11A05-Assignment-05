// header section theme changing randomly
document.getElementById("theme-btn").addEventListener("click", function () {
  const bgBody = document.getElementById("bg-color");
  bgBody.style.backgroundColor = getRgbRamdomColor();
});

// Task Assigned Value change
// mobile button issu
document
  .getElementById("mobile-btn-issu")
  .addEventListener("click", function () {
    handleTaskCompletion(
      "mobile-btn-issu",
      "task-assigned",
      "taskCount",
      "activity-log",
      "mobile-btn-issu-text"
    );
  });
// pay button
document.getElementById("pay-btn").addEventListener("click", function () {
  handleTaskCompletion(
    "pay-btn",
    "task-assigned",
    "taskCount",
    "activity-log",
    "pay-btn-text"
  );
});
// rection button
document.getElementById("rection-btn").addEventListener("click", function () {
  handleTaskCompletion(
    "rection-btn",
    "task-assigned",
    "taskCount",
    "activity-log",
    "rection-text"
  );
});
// video issu button
document
  .getElementById("video-issu-btn")
  .addEventListener("click", function () {
    handleTaskCompletion(
      "video-issu-btn",
      "task-assigned",
      "taskCount",
      "activity-log",
      "video-issu-text"
    );
  });
// AI search text
document.getElementById("ai-search-btn").addEventListener("click", function () {
  handleTaskCompletion(
    "ai-search-btn",
    "task-assigned",
    "taskCount",
    "activity-log",
    "ai-search-text"
  );
});
// probasi review button
document.getElementById("probasi-btn").addEventListener("click", function () {
  handleTaskCompletion(
    "probasi-btn",
    "task-assigned",
    "taskCount",
    "activity-log",
    "probasi-text"
  );
});

// remove element
document.getElementById("clear-history").addEventListener("click", function() {
    document.getElementById("activity-log").innerHTML = "";
});





