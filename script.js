var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

var addingStuff = document.getElementById("add");
var minusStuff = document.getElementById("minus");
var multiplyStuff = document.getElementById("multiply");
var dividingStuff = document.getElementById("divide");

var answer = document.getElementById("answer");
var debugtext = document.getElementById("debugshit");

function debug() {
  var num1 = Number(input1.value);
  var num2 = Number(input2.value);

  debugtext.textContent = `Debug: ${num1} and ${num2}`;
}

addingStuff.addEventListener("click", function() {
  var num1 = Number(input1.value);
  var num2 = Number(input2.value);

  debug();

  if (!isNaN(num1) && !isNaN(num2)) {  // Corrected NaN check
    answer.textContent = "Answer: " + (num1 + num2); // Adding numbers
  } else {
    answer.textContent = "Answer: Invalid";
  }
});

minusStuff.addEventListener("click", function() {
  var num1 = Number(input1.value);
  var num2 = Number(input2.value);

  debug();

  if (!isNaN(num1) && !isNaN(num2)) {  // Corrected NaN check
    answer.textContent = "Answer: " + (num1 - num2); // Subtracting numbers
  } else {
    answer.textContent = "Answer: Invalid";
  }
});

multiplyStuff.addEventListener("click", function() {
  var num1 = Number(input1.value);
  var num2 = Number(input2.value);

  debug();

  if (!isNaN(num1) && !isNaN(num2)) {  // Corrected NaN check
    answer.textContent = "Answer: " + (num1 * num2); // Subtracting numbers
  } else {
    answer.textContent = "Answer: Invalid";
  }
});

dividingStuff.addEventListener("click", function() {
  var num1 = Number(input1.value);
  var num2 = Number(input2.value);

  debug();

  if (isNaN(num1) && isNaN(num2)) {
    answer.textContent = "Answer: Invalid";
  }
  else if (num2 == 0) {
    answer.textContent = "Answer: Can't divide by 0";
  }
  else {
    answer.textContent = "Answer: " + (num1 / num2); // Divide numbers
  }
});
