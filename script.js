
//adding current date and time via moment.js
let m = moment();
console.log("hi", m);

$("#currentDay").text(m.format('MMMM Do YYYY')); //displaying current date


//saving to local storage

var userInput = document.getElementsByClassName('.description');
var saveBtn = document.getElementsByClassName(".saveBtn");


//saving event function
function setDailySchedule() {

    userInput = localStorage.getItem("description").value;
    console.log("A", userInput);


}
setDailySchedule();
console.log("bye", setDailySchedule);

//save button function
saveBtn.onclick = function () {

    localStorage.setItem("description", userInput.val);

}
console.log("B", saveBtn);


//time of day row background color update

var hours = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5"]
console.log(hours);
hourUpdate();


//use .querySelector for css classes?

function hourUpdate() {
    
        var thisHour = parseInt(moment().format("HH"));

    for(var i = 0; i < hours.length; i++) {
        if (thisHour > hours) {
            $(this).addClass("future")
        }
        else if (thisHour === hours) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    }
}
console.log("C", hourUpdate);
