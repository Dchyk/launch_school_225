// countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!


function countdown(num) {
  return (function(start) {
    var i;

    for (i = start; i >= 0; i--) {
      console.log(i);
    }

    console.log('Done!');
  })(num);
}

// Using recursion

function countdown(num) {
  (function count(n) {
    if (n < 0) {
      console.log('Done!');
      return;
    } else {
      console.log(n);
      count(n - 1);
    }
  })(num);
}