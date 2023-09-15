 const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button[data-value]');
    const clearButton = document.getElementById('clear');
    const calculateButton = document.getElementById('calculate');

    //click event listeners
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        display.value += button.dataset.value;
      });
    });

    // Clear display
    clearButton.addEventListener('click', () => {
      display.value = '';
    });

    // Calculate the result
    calculateButton.addEventListener('click', () => {
      try {
        const result = eval(display.value);
        display.value = result;
      } catch (error) {
        display.value = 'Error';
      }
    });
    document.getElementById("display").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            calculate();
        }
    });
    
    function calculate() {
        try {
            const input = document.getElementById("display").value;
            const result = eval(input);
            document.getElementById("display").value = result;
        } catch (error) {
            //invalid expression
            document.getElementById("display").value = " ";
        }
    }
    