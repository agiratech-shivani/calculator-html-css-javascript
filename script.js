// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })
let string = "";
let buttons = document.querySelectorAll('.button');
const inputField = document.querySelector('input');

// Function to handle calculation
// 
function calculateExpression() {
  try {
    const result = Function(`'use strict'; return (${string});`)();
    string = result.toString();
    inputField.value = string;
  } catch (error) {
    inputField.value = 'Error';
    string = '';
  }
}


// Function to handle clearing the input
function clearInput() {
  string = "";
  inputField.value = string;
}
function clearSingleValue(){
  string=string.slice(0,-1);
  inputField.value=string;
}

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      calculateExpression();
    } else if (e.target.innerHTML === 'AC') {
      clearInput();
    } else {
      string += e.target.innerHTML;
      inputField.value = string;
    }
  });
});
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key === '=') {
    calculateExpression();
  } else if (key === 'AC' ) {
    clearInput();
  } else if(key==='DEL'||key==='Backspace'){
    clearSingleValue();
  }else if (/[\d+\-*/]/.test(key)) {
    string += key;
    inputField.value = string;
  }
});