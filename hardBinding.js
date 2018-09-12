// What function can we use to permanently bind a function to a particular execution context?

// Function.prototype.bind()

// What will the code below log to console?

var obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj); // Nothing - bind doesn't call the function, it just returns the new bound version

// What will the code below output:

var a = 1;
var b = -1;
var obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

var bar = foo.bind(obj);  // bar is now equal to foo bound to the context of obj. 

console.log(foo()); // 0  // foo is 
console.log(bar()); // 5

// What will the code below log to the console?

var positiveMentality = {
  message: 'JavaScript makes sense!',
};

var negativeMentality = {
  message: 'JavaScript makes no sense!',
};

function foo() {
  console.log(this.message);
}

var bar = foo.bind(positiveMentality); // bar now references foo, bound to the context of positiveMentality

negativeMentality.logMessage = bar; 
negativeMentality.logMessage();        // ''JavaScript makes sense!'

// what will the below code output?

var obj = {
  a: 'Amazebulous!',
};
var otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

var bar = foo.bind(obj);  

bar.call(otherObj); // 'Amazebulous!'