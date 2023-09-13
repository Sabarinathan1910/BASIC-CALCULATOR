const display = document.getElementById('display');
const buttons = document.querySelectorAll('button[data-value]');
const clearButton = document.getElementById('clear');
const calculateButton = document.getElementById('calculate');

// Add click event listeners to number and operator buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.dataset.value;
  });
});

// Clear the display
clearButton.addEventListener('click', () => {
  display.value = '';
});

// Calculate and display the result
calculateButton.addEventListener('click', () => {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
});