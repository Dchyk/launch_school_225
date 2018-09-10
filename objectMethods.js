var me = {
  firstName: 'Jane',
  lastName: 'Doe',
};

var me = {};

me.firstName = 'Jane';
me.lastName  = 'Doe';

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

fullName(me); // Jane Doe

var friend = {
  firstName: 'John',
  lastName: 'Smith',
}

fullName(friend); // John Smith

var mother = {
  firstName: 'Amber',
  lastName: 'Doe'
}

var father = {
  firstName: 'Shane',
  lastName: 'Doe'
}

fullName(mother); // Amber Doe
fullName(father); // Shane Doe

var people = [];

