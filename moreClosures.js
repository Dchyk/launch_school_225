// Write a function named makeMultipleLister that, when invoked and passed a number, 
// returns a function that logs every positive integer multiple of that number less than 100. 

function makeMultipleLister(num) {
  return function() {
    var i;

    for (i = num; i <= 100; i += num) {
      console.log(i);
    }
  }
}

// Running total

var runningTotal = 0;

function add(value) {
  runningTotal += value;
  console.log(runningTotal);
}

function subtract(value) {
  runningTotal -= value;
  console.log(runningTotal);
}

// call later

function later(func, arg) {
  return function() {
    func(arg);
  }
}


// Make list redo