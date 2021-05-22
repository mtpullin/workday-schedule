var currentDay = document.getElementById("currentDay")
var taskEl = document.getElementById("taskText")
var timeEl = document.getElementsByClassName("time")
currentDay.innerHTML = moment().format("MMM, DD, YYYY")

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("task"));
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
    localStorage.setItem("tasks", JSON.stringify("task",taskEl));
    alert("Task Saved")
})
var auditTime = function(){
    var currentTime= moment().hour();
$(".time").each(function () {
    var hour= parseInt($(this).attr("id").split("hour")[1]);
    console.log(hour, currentTime)
})

}
loadTasks();