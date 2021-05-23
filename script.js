var currentDay = document.getElementById("currentDay")
var taskEl = document.getElementsByClassName("task")
var timeEl = document.getElementsByClassName("time")
currentDay.innerHTML = moment().format("MMM, DD, YYYY")

var loadTasks = function() {
    task = JSON.parse(localStorage.getItem("task"));
    if(!task)
    task = []
    };

$("#hour8 .task").val(localStorage.getItem("task"))
$("#hour9 .task").val(localStorage.getItem("task"))
$("#hour10 .task").val(localStorage.getItem("task"))
$("#hour11 .task").val(localStorage.getItem("task"))
$("#hour12 .task").val(localStorage.getItem("task"))
$("#hour13 .task").val(localStorage.getItem("task"))
$("#hour14 .task").val(localStorage.getItem("task"))
$("#hour15 .task").val(localStorage.getItem("task"))
$("#hour16 .task").val(localStorage.getItem("task"))
$("#hour17 .task").val(localStorage.getItem("task"))



$(".task").on("click",function() {
    var text = $(this)
    .text()
    .trim()

    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});

$(".saveBtn").on("click",function(){
    localStorage.setItem("task", JSON.stringify(task));
    alert("Task Saved")
})
var auditTime = function(){
    var currentTime= moment().hour();
$(".time").each(function () {
    var hour= parseInt($(this).attr("id").split("hour")[1]);
    console.log(hour, currentTime)
    
    if(hour < currentTime) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
    else if (hour === currentTime) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }
    else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }
})

}
auditTime();
loadTasks();