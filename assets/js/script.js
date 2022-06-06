var textInput = [];
var currentTime = moment().hours();
var currentDay = document.querySelector("#currentDay");
var currentDate = new Date();
  

function showDate() {
  var rightNow = moment().format("dddd, MMMM Do");
  currentDay.innerHTML = rightNow;
  console.log(rightNow);
};

function colorCoding() {
  for (let i = 8; i <=17; i++) {
    if (i < currentTime) {
      $("#" + i).addClass("past");
    } 
    else if (i === time) {
      $("#" + i ).addClass("present"); 
    } 
    else if (i > time) {
      $("#" + i).addClass("future");
    }
  }
};

showDate();
colorCoding();





// var save = function () {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// };