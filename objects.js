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