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


$("textarea").on("click", function () {
  console.log("text clicked!!!!!")
  var text = $(this)
    .text()
    .trim();

  var textInput = $("<textarea>")
    .val(text);

  $(this).replaceWith(textInput);
  
  textInput.trigger("focus");
});

$(".saveBtn").on("click", saveInput);

function saveInput(event) {
  //localStorage.setItem("textInput", JSON.stringify());
  //console.log($(event.target).siblings()[1].value);
  var textVal = $(event.target).siblings()[1].value;
  var timeId = $(event.target).parents()[1].id;
  localStorage.setItem(timeId, textVal);
};




showDate();
colorCoding();






