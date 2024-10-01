/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Increment a counter or decrement it
Save count in session storage
*/

var count;

function inc() {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}
function dec() {
  if (parseInt(counter.innerHTML) > 0)
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
}
var counter = document.getElementById("counter");

function incToo() {
  let count = Number(sessionStorage.getItem("count"));

  if (!count) {
    // checks if count is null, undefined, 0, false, NaN
    count = 0;
  }
  count++; // increment count
  sessionStorage.setItem("count", count);
}
function decToo() {
  let count = Number(sessionStorage.getItem("count"));

  if (!count) {
    // checks if count is null, undefined, 0, false, NaN
    count = 0;
  }
  count--; // decrement count
  sessionStorage.setItem("count", count);
}

/*
MODIFY HOW MANY POINTS ARE REQUIRED IN THE FUNCTIONS BELOW
TO DETERMINE WHICH RESULT PAGE THE QUIZ TAKER SHOULD GO TO 
*/

function showResults() {
  let count = Number(sessionStorage.getItem("count"));
  if (!count) {
    window.location = "no.html";
  } else if (count > 4) {
    window.location = "yes.html";
  } else if (count > 2) {
    window.location = "maybe.html";
  } else if (count <= 2) {
    window.location = "no.html";
  }
}

function resetQuiz() {
  sessionStorage.clear();
  window.location = "index.html";
}
