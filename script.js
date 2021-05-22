var currentDay = document.getElementById("currentDay")
var taskEl = document.getElementById("taskText")

currentDay.innerHTML = moment().format("MMM, DD, YYYY")

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("taskText"));
    if(!tasks)
    tasks = []
    };





$(".task").on("click",function() {
    var text = $(this)
    .text()
    .trim()

    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});

$(".saveBtn").on("click",function(){
    localStorage.setItem("tasks", JSON.stringify(taskEl));
    alert("Task Saved")
})
loadTasks();