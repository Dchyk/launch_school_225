// Make list redux

function makeList() {
  return {
    items: [],

    add: function(item) {
      this.items.push(item);
      console.log(item, 'added!');
    },

    remove: function(item) {
      this.items = this.items.filter(listItem => listItem !== item);
      console.log(item, 'removed!');
    },

    list: function() {
      this.items.forEach(item => console.log(item));
    }
  }
}

// Prevent outside access to data

function makeList() {
  items: [];

  return {

    add: function (item) {
      var index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(item + ' added!');
      }
    },

    list: function () {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(function(item) {
          console.log(item);
        });
      }
    },

    remove: function (item) {
      var index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(item + ' removed!');
      }
    },
  };
}