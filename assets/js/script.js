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
  var timeId = $(event.target).parents()[0].id;
  localStorage.setItem(timeId, textVal);

};

function loadStorage() {
  for (let i = 8; i <=17; i++) {
    localStorage.getItem(i);
    console.log(localStorage.getItem(i))
    $("#" + i).children()[i] = localStorage.getItem(i);
    //console.log($("#" + i).children()[1]);
    //console.log(textInput)
    $("#" + i).append(localStorage.getItem(i));
  }
};




showDate();
colorCoding();
loadStorage();






