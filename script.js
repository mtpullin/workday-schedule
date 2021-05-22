var currentDay = document.getElementById("currentDay")
var taskEl = document.getElementById("task")

currentDay.innerHTML = moment().format("MMM, DD, YYYY")

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    if(!tasks){
    tasks = []
    }
};





$("taskEl").on("click",function() {
    var text = $(this)
    .text()
    .trim()

    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

    textInput.trigger("focus");
});
