// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var allTextareaEl = $('textarea');
var allButtonEl = $('button');
var container = $('.container-fluid')
var timeBlock = $('.time-block')













  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

 allButtonEl.on( 'click', function () {
var textContent = $(this).siblings('description').val();
var key = $(this).parent().attr('id');

localStorage.setItem(key, textContent);

 } ) 

 

 

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

function currenTime() {
  for (i = 0; i < timeBlockHour.length; i++) {
    var currentHour = dayjs().hour();

  var currentHourBlock = [];
  var hourBlock = JSON.parse(timeBlockHour.attr( 'id'));
  // console.log(typeof hourBlock);


  if (hourBlock < currentHour) {
    $(currentHourBlock).addClass("past")
  };
  
}
};

// var isPresente = true;

// allButtonEl.on('click', function () {
// if (isPresente == true) {
//   allTextareaEl.textContent('present') 
// }

// }) 








  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  function displyUser() {
    for (i = 0; i < localStorage.length; i++) {
    var key = localStorage.key;
    var savedEvent = JSON.parse(localStorage.getItem(key.val));
    }

  }
  // TODO: Add code to display the current date in the header of the page.

  var currentDayEl = dayjs();
$('#currentDay').text(currentDayEl.format('MMM DD, YYYY'));







