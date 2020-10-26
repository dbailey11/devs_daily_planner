
//adding current date and time via moment.js
let m = moment();
// console.log("hi", m);

//displaying current date
$("#currentDay").text(m.format('MMMM Do YYYY')); 


//saving to local storage

var userInput = document.getElementsByClassName('.description');
var saveBtn = document.getElementsByClassName(".saveBtn");
var hours = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5"]

window.onload = function () {
    // console.log("hello");

    for(i = 0; i < hours.length; i++) {
        //checking to see if there is something is in localstorage for time - checking the key
        if (localStorage.getItem(hours[i]) != null) {
           
           var row = document.getElementById('text' + hours[i]);
           row.value = localStorage.getItem(hours[i]); 
        }
    }

}


//give button functionality 
function saveRow (buttonName) {
    // console.log("D", buttonName);

    //using substring from index 3 to the end to get the number
    var number = buttonName.substring(3, buttonName.length);
    // console.log("E", number);
    // make sure to get correct time row
    var row = document.getElementById('text' + number);

    if(row.value != null) {
        localStorage.setItem(number, row.value);
    }

}


//time of day row background color update



hourUpdate();

//use .querySelector for css classes?

function hourUpdate() {

    // var hoursMil = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"]

        var thisHour = parseInt(moment().format("HH"));
       
        // var thisHour = 10;
        // console.log("F", thisHour);

        var present = document.getElementById(thisHour);
        // var past = document.getElementById(thisHour - 1);
        
        //
        present.classList.add('present');
        //checking if present contains class past/future and remove those
        if(present.classList.contains('past')) {
            present.classList.remove('past');
        }
        if(present.classList.contains('future')) {
            present.classList.remove('future');
        }
        

        for(i = thisHour; i <= 17; i++) {
            document.getElementById(i).classList.add('future');
            if(document.getElementById(i).classList.contains('past')) {
                //removes the past class if it contains it
                document.getElementById(i).classList.remove('past');
            }
        }

        for(i = 8; i <= thisHour; i++) {
            document.getElementById(i).classList.add('past');
            if(document.getElementById(i).classList.contains('future')) {
                //removes the future class if it contains it
                document.getElementById(i).classList.remove('future');
            }
        }
 
}
// console.log("C", hourUpdate);
