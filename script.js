'use strict';
// When you declare your variables, the input is still empty.
// So the result you get shown will also be empty.
// No matter what current contents the input field might hold at the time.
// Hence you need to access the value (variable.value) when a button function is clicked
// before u will get the desired output
// you should update the variable every time the functions are called:
// and make sure dom content is loaded

let num1El = document.getElementById('num-1');
let num2El = document.getElementById('num-2');
let display = document.getElementById('display');
let result;
// let num1 = (num1El.textContent = 6);
// let num2 = (num2El.textContent = 5);

function add() {
  result = +num1El.value + +num2El.value;
  display.textContent = result;
}

function subtract() {
  result = +num1El.value - +num2El.value;
  display.textContent = result;
}

function divide() {
  result = +num1El.value / +num2El.value;
  display.textContent = result;
}

function multiply() {
  result = +num1El.value * +num2El.value;
  display.textContent = result;
}

function reset() {
  num1El.value = '';
  num2El.value = '';
  display.textContent = '';
}
