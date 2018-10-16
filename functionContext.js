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
  return function() {
    return func.apply(ctx, arguments);
  }
}

