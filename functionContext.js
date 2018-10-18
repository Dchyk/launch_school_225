var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    });
  },
};

// Refactored
var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    var self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

// Using hard binding
var franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};

// Create a function myBind, that accepts two arguments: 
// 1) The function to bind, 
// 2) The context object, and returns a new function that's hard-bound to the passed in context object.
function myBind(func, context) {
  return func.apply(context);
}

function myBind(func, ctx) {
  return function(args) {
    return func.apply(ctx, arguments);
  }
}




// Add a thisArg to myFilter
function myFilter(array, func, thisArg) {
  var result = [];

  array.forEach(function(value) {
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });

  return result;
}

// Will JS GC collect the variable "count" after counter() is run?
function makeCounter() {
  var count = 1;

  return function() {
    console.log(count++)
  };
}

var counter = makeCounter();
counter();


// Make a Stack
function newStack() {
  var stack = [];

  return {
    push: function(item) {
      stack.push(item);
    },

    pop: function(item) {
      stack.pop(item);
    },

    printStack: function() {
      stack.forEach(item => console.log(item));
    }
  }
}

// Refactor to avoid polluting the global scope:
var name = 'Naveed';
var greeting = 'Hello';

var greeter = {
  message: greeting + ' ' + name + '!',
  sayGreetings: function() {
    console.log(this.message);
  }
};

// Refactored
var greeter = (function (name, greeting) {
  return {
    message: greeting + ' ' + name + '!',
    sayGreetings: function() {
      console.log(this.message);
    }
  }
})('Naveed', 'Hello');



// Refactor this
function schoolMaker() {
  students = [];
  allowedYears = ['1st', '2nd', '3rd', '4th', '5th'];

  var school = {
    addStudent: function(name, year) {
      if (allowedYears.indexOf(year) >= 0) {
        var student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },
  
    enrollStudent: function(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode})
    },
  
    addGrade: function(student, courseName, grade) {
      var course = student.listCourses().filter(function(course) {
        return course.code === courseName;
      })[0];
  
      if (course) {
        course.grade = grade;
      }
    },
  
    getReportCard: function(student) {
      student.listCourses().forEach(function(course) {
        if (course.grade) {
          console.log(course.name + ': ' + String(course.grade));
        } else {
          console.log(course.name + ': In progress');
        }
      });
    },
  
    courseReport: function(courseName) {
      function getCourse(student, courseName) {
        return student.listCourses().filter(function(course) {
          return course.name === courseName;
        })[0];
      }
  
      var courseStudents = students.map(function(student) {
        var course = getCourse(student, courseName) || { grade: undefined };
        return { name: student.name, grade: course.grade };
      }).filter(function(student) {
        return student.grade;
      });
  
      if (courseStudents.length > 0) {
        console.log('=' + courseName + ' Grades=');
  
        var average = courseStudents.reduce(function(total, student) {
          console.log(student.name + ': ' + String(student.grade));
          return total + student.grade;
        }, 0) / courseStudents.length;
  
        console.log('---');
        console.log('Course Average: ' + String(average));
      }
    },


}

var school = {
  students: [],
  addStudent: function(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].indexOf(year) >= 0) {
      var student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent: function(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode})
  },

  addGrade: function(student, courseName, grade) {
    var course = student.listCourses().filter(function(course) {
      return course.code === courseName;
    })[0];

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard: function(student) {
    student.listCourses().forEach(function(course) {
      if (course.grade) {
        console.log(course.name + ': ' + String(course.grade));
      } else {
        console.log(course.name + ': In progress');
      }
    });
  },

  courseReport: function(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(function(course) {
        return course.name === courseName;
      })[0];
    }

    var courseStudents = this.students.map(function(student) {
      var course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(function(student) {
      return student.grade;
    });

    if (courseStudents.length > 0) {
      console.log('=' + courseName + ' Grades=');

      var average = courseStudents.reduce(function(total, student) {
        console.log(student.name + ': ' + String(student.grade));
        return total + student.grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log('Course Average: ' + String(average));
    }
  },
};