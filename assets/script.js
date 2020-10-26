
//adding current date and time via moment.js
let m = moment();
// console.log("hi", m);

//displaying current date
$("#currentDay").text(m.format('MMMM Do YYYY')); 

//saving to local storage
var userInput = document.getElementsByClassName('.description');
var saveBtn = document.getElementsByClassName(".saveBtn");
var hours = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5"]

//function for when page loads, any previous user input will be displayed
window.onload = function () {
    // console.log("hello");

    for(i = 0; i < hours.length; i++) {
        //checking to see if there is something is in localstorage for certain time block row - checking the key
        if (localStorage.getItem(hours[i]) != null) {
           
           var row = document.getElementById('text' + hours[i]);
           row.value = localStorage.getItem(hours[i]); 
        }
    }
}

//button functionality and saving to local storage
function saveRow (buttonName) {
    // console.log("D", buttonName);

    //using substring from index 3 to the end to get the number
    var number = buttonName.substring(3, buttonName.length);
    // console.log("E", number);

    // make sure to get correct time block row
    var row = document.getElementById('text' + number);

    //saves input to local storage as long as there is some sort of input there
    if(row.value != null) {
        localStorage.setItem(number, row.value);
    }
}

//time block row background color update
function hourUpdate() {
    //creating a variable that houses moment.js to provide the current time
    var thisHour = parseInt(moment().format("HH"));
    
    //testing different times
    // var thisHour = 12;
    // console.log("F", thisHour);

    var present = document.getElementById(thisHour);
    // var past = document.getElementById(thisHour - 1);
        
    //setting the color for the present time block row
    present.classList.add('present');
    //checking if present contains class past/future and remove those
    if(present.classList.contains('past')) {
        present.classList.remove('past');
    }
    if(present.classList.contains('future')) {
        present.classList.remove('future');
    }
        
    //for loops that check the current time to make sure the correct color is displayed for each time block row - removes the color that doesn't belong
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
hourUpdate();
// console.log("C", hourUpdate);
