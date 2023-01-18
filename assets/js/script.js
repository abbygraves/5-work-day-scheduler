var textInput = [];
var currentTime = moment().hours();
var currentDay = document.querySelector("#currentDay");
var textArea = document.querySelector(".text-field");
var currentDate = new Date();


function showDate() {
  var rightNow = moment().format("dddd, MMMM Do");
  currentDay.innerHTML = rightNow;
  console.log(rightNow);
};

function colorCoding() {
  for (let i = 8; i <= 17; i++) {
    if (i < currentTime) {
      $("#" + i).addClass("past");
    }
    else if (i === currentTime) {
      $("#" + i).addClass("present");
    }
    else if (i > currentTime) {
      $("#" + i).addClass("future");
    }
  }
};


/* $("textarea").on("click", function () {
  console.log("text clicked!!!!!")
  var text = $(this)
    .text()
    .trim();

  var textInput = $("<textarea>")
    .val(text);

  // $(this).replaceWith(textInput);

  // textInput.trigger("focus");
}); */



/* ⬇︎ JQUERY TO RECOGNIZE WHEN A BUTTON IS CLICKED AND UPON CLICK EXECUTE THE SPECIFIED ACTION 
    • In this case the action we are executing is to run the saveInput function
    • This entire line is what the event parameter in line 56 is referencing */
$(".saveBtn").on("click", saveInput);


/* ⬇︎ SAVE INPUT FUNCTION
    • Sibilings of each div (aka the timeblocks) are span, textarea, and button. 
    • The sibilings are an array so that makes: span ➝ 0, textarea ➝ 1, button ➝ 2
    • Parents refers to the div (aka timeblock) and we only want the immediate parent (go up 1 level in the DOM) so that would be 0
    • event is click, target is saveBtn */
function saveInput(event) {
  var textVal = $(event.target).siblings()[1].value;
  var timeId = $(event.target).parents()[0].id;
  localStorage.setItem(timeId, textVal);
};


/* ⬇︎ LOAD ALL DATA SAVED IN LOCAL STORAGE FUNCTION
• LINE 68 & 69: Create a for loop to get/retrieve the items (values) saved to each id (key)
• LINE 69: (i) = the id
• LINE 70: Append the item (value) retrieved from local storage to it's cordinating id (key) */
function loadStorage() {
  for (let i = 8; i <= 17; i++) {
    localStorage.getItem(i);
    $("#" + i).append(localStorage.getItem(i));
  }
};


showDate();
colorCoding();
loadStorage();