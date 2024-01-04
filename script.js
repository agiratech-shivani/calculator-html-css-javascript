
let string = "";
let buttons = document.querySelectorAll('.button');
const inputField = document.querySelector('input');

// Function to handle calculation
function calculateExpression() {
  try {
    // Define arithmetic operators and their respective functions
    const operators = {
      '*': (x, y) => x * y,
      '/': (x, y) => x / y,
      '+': (x, y) => x + y,
      '-': (x, y) => x - y,
    };

    // Operator precedence: defines precedence levels for each operator
    const precedence = {
      '*': 2,
      '/': 2,
      '+': 1,
      '-': 1,
    };

    // Initialize empty arrays to handle postfix conversion and evaluation
    const postfix = [];
    const stack = [];
   ////2 * 3 + 4 / 2
    let number = '';
    // Loop through each character in the input string
    for (let i = 0; i < string.length; i++) {
      const char = string[i];

      // Check if the character is a number or decimal point
      if (!isNaN(char) || char === '.') {
        number += char; // Construct the number (operand)
      } 
      else {
        if (number) {
          postfix.push(parseFloat(number)); // Push the constructed number to postfix array
          number = '';
        }

        // Handle operators
        while (
          stack.length &&
          precedence[char] <= precedence[stack[stack.length - 1]]
        ) {
          postfix.push(stack.pop()); // Pop operators from the stack based on precedence
        }

        stack.push(char); // Push the current operator onto the stack
      }
    }

    if (number) {
      postfix.push(parseFloat(number)); // Push any remaining number to postfix array
    }

    while (stack.length) {
      postfix.push(stack.pop()); // Push remaining operators from stack to postfix array
    }
    console.log(postfix)
//2 * 3 5 8 / +

    const evaluate = []; // Array to perform postfix expression evaluation

    postfix.forEach((postfixValues) => {
      if (!isNaN(postfixValues)) {
        evaluate.push(postfixValues); // Push operands to the evaluation stack
      } else {
        const [y, x] = [evaluate.pop(), evaluate.pop()];
        // Evaluate expressions based on postfix notation and operators
        evaluate.push(operators[postfixValues](x, y));
      }
    });

    const result = evaluate.pop(); // Final result of the arithmetic expression
    inputField.value = result; // Display the result in the input field

    // Store the calculation history in local storage
    let allCalculations = JSON.parse(localStorage.getItem('allCalculations')) || [];
    allCalculations.push({ expression: string, result: result });
    localStorage.setItem('allCalculations', JSON.stringify(allCalculations));

  } catch (error) {
    // Handle any errors during expression evaluation
    inputField.value = 'Error';
    string = ''; // Reset the input string in case of an error
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
    }else if(e.target.innerHTML==="DEL"){
      clearSingleValue();
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
  } else if (/[@#$&!]/
  .test(key)) {
    alert("not a valid input");
  }
});