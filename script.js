const display = document.getElementById('display');
const buttons = document.querySelectorAll('button[data-value]');
const clearButton = document.getElementById('clear');
const calculateButton = document.getElementById('calculate');

let lastInputWasOperator = false;

// Click event listeners
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === '.') {
      // Check if a decimal point already exists in the display value
      if (!display.value.includes('.')) {
        // If not, append it to the display
        display.value += value;
      }
    } else if (isOperator(value)) {
      // Check if the last input was an operator
      if (!lastInputWasOperator) {
        // If not, append the operator to the display
        display.value += value;
        lastInputWasOperator = true;
      }
    } else {
      // For digits and other characters
      display.value += value;
      lastInputWasOperator = false;
    }
  });
});

// Clear display
clearButton.addEventListener('click', () => {
  display.value = '';
  lastInputWasOperator = false;
});

// Calculate the result
calculateButton.addEventListener('click', () => {
  try {
    const result = eval(display.value);
    display.value = result;
    lastInputWasOperator = false;
  } catch (error) {
    display.value = 'Error';
  }
});

document.getElementById('display').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    calculate();
  }
});

function calculate() {
  try {
    const input = document.getElementById('display').value;
    const result = eval(input);
    document.getElementById('display').value = result;
    lastInputWasOperator = false;
  } catch (error) {
    // Invalid expression
    document.getElementById('display').value = ' ';
  }
}

// Helper function to check if a character is an operator
function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}
