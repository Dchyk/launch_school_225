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

    addstudent: function(name, year) {
      if (['1st', '2nd', '3rd', '4th', '5th'].indexOf(year) === -1) {
        console.log('Invalid Year')
      } else {
        this.students.push(createStudent(name, year));
      }
    },

    enrollStudent: function(student, course) {
      var selectedStudent = this.students.filter(function(individualStudent) {
        individualStudent.name === student.name;
      });

      selectedStudent.courses.push(course);
    },

    addGrade: function(student, course, grade) {
      var selectedStudent = this.students.filter(function(individualStudent) {
        individualStudent.name === student.name;
      });

      var selectedCourse = selectedStudent.courses.filter(function(selectedCourse) {
        selectedCourse.code = course.code
      });
    }
  }
}