'use strict';

// let compute = document.querySelector('#compute');
// function calc() {
//   let n1 = +document.getElementById('n1').value;
//   let n2 = +document.getElementById('n2').value;
//   let oper = document.getElementById('operators').value;

//   if (oper === '+') {
//     document.getElementById('result').value = n1 + n2;
//   }
//   if (oper === '-') {
//     document.getElementById('result').value = n1 - n2;
//   }
//   if (oper === '/') {
//     document.getElementById('result').value = n1 / n2;
//   }
//   if (oper === 'x') {
//     document.getElementById('result').value = n1 * n2;
//   }
// }

// compute.addEventListener('click', function () {
const calc = () => {
  let n1 = +document.querySelector('#n1').value;
  let n2 = +document.querySelector('#n2').value;
  let oper = document.querySelector('#operators').value;
  let result;
  //   if (oper === '+') {
  //     document.getElementById('result').value = n1 + n2;
  //   }
  switch (oper) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '/':
      result = n1 / n2;
      break;
    case 'x':
      result = n1 * n2;
      break;
  }
  document.getElementById('result').value = result;
};
