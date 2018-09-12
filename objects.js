var sedan = {
  speed: 0,
  rate: 8

  accelerate: function() {
    this.speed += this.rate;
  },
};

function makeCar(accRate, brakeRate) {
  return {
    speed: 0,
    accRate: accRate,
    brakeRate: brakeRate,
    accelerate: function() {
      this.speed += this.accRate;
    },
    brake: function() {
      this.speed -= this.brakeRate;

      if (this.speed < 0) {
        this.speed = 0;
      }
    }
  };
}

function makeCountry(name, continent) {
  return {
    name: name,
    continent: continent,
    visited: false,
    getDescription: function() {
      return this.name + ' is located in ' + this.continent + '.';
    },
  };
}

function objectsEqual(objectOne, objectTwo) {
  var equal = true;
  var keys = Object.keys(objectOne);
  var keysTwo = Object.keys(objectTwo);
  var i;



  for (i = 0; i < keys.length; i++) {
    if (keysTwo.indexOf(keys[i]) === -1 || objectOne[keys[i]] !== objectTwo[keys[i]]) {
      equal = false;
      break;
    }
  }

  return equal;
}

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info: function() {
      console.log(this.name + ' is a ' + this.year + ' year student.');
    },

    addCourse: function(newCourse) {
      this.courses.push({name: newCourse.name, code: newCourse.code});
    },

    listCourses: function() {
      console.log(this.courses);
    },

    addNote: function(code, note) {
      var course = this.courses.filter(function(testedCourse) {
        return testedCourse.code === code;
      })[0];

      if (course.note) {
        course.note += '; ' + note;
      } else {
        course.note = note;
      }
    },

    updateNote: function(code, note) {
      this.courses.filter(function(course) {
        return course.code === code;
      })[0].note = note;
    },

    viewNotes: function() {
      this.courses.forEach(function(course) {
        console.log(course.name + ': ' + course.note);
      });
    },
  }
}

function generateSchool() {
  return {
    students: [],

    addStudent: function(student) {
      if (['1st', '2nd', '3rd', '4th', '5th'].indexOf(student.year) === -1) {
        console.log('Invalid Year');
      } else {
        var newStudent = createStudent(student.name, student.year);
        newStudent.courses = student.courses;
        this.students.push(newStudent);
      }
    },

    enrollStudent: function(student, course) {
      var selectedStudent = this.students.filter(function(individualStudent) {
        return individualStudent.name === student.name;
      });

      selectedStudent.courses.push(course);
    },

    addGrade: function(student, course, grade) {
      var selectedStudent = this.students.filter(function(individualStudent) {
        return individualStudent.name === student.name;
      });

      var selectedCourse = selectedStudent.courses.filter(function(selectedCourse) {
        return selectedCourse.code = course.code;
      });

      selectedCourse.grade = grade;
    },

    getReportCard: function(student) {
      var selectedStudent = this.students.filter(function(individualStudent) {
        return individualStudent.name === student.name;
      });

      selectedStudent[0].courses.forEach(function(course) {
        var grade = course.grade || 'In progress';
        console.log(course.name + ': ' + grade);
      });
    },
 
    courseReport: function(courseName) {
      var total = 0;
      var average;
      var studentsInThisCourse = this.students.filter(function(student) {
        return student.courses.some(function(course) {
          return course.name === courseName;
        });
      });

      total = studentsInThisCourse.reduce(function(total, student) {
        return total + student.courses.filter(function(course) {
          return course.name === courseName;
        })[0].grade;
      });

      if (studentsInThisCourse.length === 0) {
        return undefined;
      }

      console.log('=' + courseName + ' Grades=');

      studentsInThisCourse.forEach(function(student) {
        var grade = student.courses.filter(function(course) {
          return course.name === courseName;
        })[0].grade;

        total += grade;

        console.log(student.name + ': ' + grade);
      });

      console.log('---')
      console.log('Course Average: ' + String(total / studentsInThisCourse.length));
    }
  }
}


// Execution context

var a = 10;  // window.a = 10;
var b = 10;  // window.b = 10;
var c = {    // window.c = {a: -10, b: -10}
  a: -10,
  b: -10,
};

function add() {
  return this.a + b;  
}

c.add = add; // window.c = {a: -10, b: -10, add: function add() {return this.a + b}}

console.log(add());   // 20
console.log(c.add()); // 0


// Function.prototype.call() and Function.prototype.apply() allow you to specify an explicit function execution context, 
// as well as pass arguments to the function being called. call() takes args as a list, whereas apply() takes args as an array


// In the code below, use call to invoke add as a method on bar but with foo as execution context. What will this return?

var foo = {
  a: 1,
  b: 2,
};

var bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

bar.add.call(foo); // 3

// Given the code and desired output below, would it make more sense to use call or apply to supply explicit context 
// and arguments to outputList? Implement a solution using one of the methods, such that the desired output is logged, 
// and explain your choice.

var fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};



function outputList() {
  console.log(this.title + ':');

  var args = [].slice.call(arguments);  // Call Array.protype.slice, and pass in the arguments list. 

  args.forEach(function(elem) {
    console.log(elem);
  });
}

// invoke outputList here - using apply so that we can pass in the list of fruits array
outputList.apply(fruitsObj, fruitsObj.list);

// A Collection of Fruit:
// Apple
// Banana
// Grapefruit
// Pineapple
// Orange

// For an extra challenge, consider this line of code from the previous problem:

// var args = [].slice.call(arguments);

// Inside of JavaScript functions, arguments is an object that holds all of the arguments passed to the function. 
// Bearing in mind that the function author wants to iterate over the arguments later in the method using an Array method, 
// why do you think he or she is invoking call?

// - The reason for this this that 'arguments' is not an array, but an Array-like object, and doesn't haven any Array properties
// or methods except for 'length'. So in order to call Array methods like 'forEach' on it, for example, 
// it must be transformed into a real Array