var currentDay = document.getElementById("currentDay")
var taskEl = document.getElementsByClassName("task")
var timeEl = document.getElementsByClassName("time")
currentDay.innerHTML = moment().format("MMM, DD, YYYY")

//pulls different hours from local storage 
$("#hour8 .task").val(localStorage.getItem("hour8"))
$("#hour9 .task").val(localStorage.getItem("hour9"))
$("#hour10 .task").val(localStorage.getItem("hour10"))
$("#hour11 .task").val(localStorage.getItem("hour11"))
$("#hour12 .task").val(localStorage.getItem("hour12"))
$("#hour13 .task").val(localStorage.getItem("hour13"))
$("#hour14 .task").val(localStorage.getItem("hour14"))
$("#hour15 .task").val(localStorage.getItem("hour15"))
$("#hour16 .task").val(localStorage.getItem("hour16"))
$("#hour17 .task").val(localStorage.getItem("hour17"))

//saves to local storage after clicking save button
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id"); 

    //set items in local storage.
    localStorage.setItem(time, text)
    alert("Task Saved")
});

var auditTime = function(){
    var currentTime= moment().hour();
$(".time").each(function () {
    var hour= parseInt($(this).attr("id").split("hour")[1]);
    
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
setInterval(function() {
    $(".task .time").each(function(index, el) {
        auditTime(el);
    })
},600000)
auditTime();