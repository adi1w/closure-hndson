 
// ANS1//
 function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());


//ANS2//

let count = 0;
(function () {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();


//ANS3//
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
  }

//ANS4//
function calculateRectangleArea(length) {
    function innerFunction(breadth) {
      return length * breadth;
    }
  
    return innerFunction;
  }
  
  // Usage
  const rectangleArea = calculateRectangleArea(9); // Outer function is called with the length parameter
  const area = rectangleArea(15); // Inner function is called with the breadth parameter
  console.log(area);

//ANS5//

  function createCounter() {
    let counter = 0; // Counter variable in the outer function
  
    function increaseCounter() {
      counter++; // Increase the counter variable
      console.log(counter);
    }
  
    return increaseCounter;
  }
  
  // Usage
  const counter = createCounter(); // Outer function is called and returns the inner function
  
  counter(); // Output: 1
  counter(); // Output: 2
  counter(); // Output: 3


//ANS6//

var a = 12;
(function () {
  alert(a);
})();

//ANS7//

var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();


//ANS8//
var globalVar = "xyz";

(function outerFunc(outerArg) {
  var outerVar = 'a';

  (function innerFunc(innerArg) {
    var innerVar = 'b';

    console.log(
      "outerArg = " + outerArg + "\n" +
      "innerArg = " + innerArg + "\n" +
      "outerVar = " + outerVar + "\n" +
      "innerVar = " + innerVar + "\n" +
      "globalVar = " + globalVar
    );

  })(456);
})(123);

  
  