function greet(greeting, name) {
  var capitalized = greeting[0].toUpperCase() + greeting.slice(1);
  var message = capitalized + ', ' + name + '!';
  console.log(message);
}

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

var sayHello = partial(greet, 'Hello');

// Using partial function application implement a function, sub5, 
// that returns the value of a number subtracted by 5.

function subtract(a, b) {
  return a - b;
}

function sub5(a) {
  return subtract(a, 5);
}

function makeSubN(n) {
  return function(num) {
    return subtract(num, n);
  }
}

// Supply any operation, not just subtraction

function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  }
}

function multiply(a, b) {
  return a * b;
}

var multiplyBy5 = makePartialFunc(multiply, 5);

multiplyBy5(100); // 500


// Implement the function

var subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    rollCall('Math', students);
  }
}

var mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// Math:
// Fatima
// Gary
// Susan