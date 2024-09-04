// Get the display element
const display = document.querySelector('.display');

// Initialize display value
let displayValue = '';

// Add event listeners to buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    // Handle operator buttons
    if (value === 'AC') {
      displayValue = '';
    } else if (value === 'DEL') {
      displayValue = displayValue.slice(0, -1);
    } else if (value === '=') {
      try {
        displayValue = eval(displayValue);
      } catch (e) {
        displayValue = 'Error';
      }
    } else {
      displayValue += value;
    }

    // Update display
    display.value = displayValue;
 
// Add console logs for debugging 
console.log('button clicked', value);
console.log('display value:', displayValue); });
});
console.log('Before update', display.value);
display.value = 
displayValue; console.log('After update:', display.Value)
document.addEventListener('DOMContentLoaded', () => 
  { // Get the display element const display =
    document.querySelector('.display');
    //Initialize display value
    let displayValue='';
    // Add event isteners to buttons
    document.querySelectorAll('button').forEach(button => 
      { button.addEventListener('click', () => {
        // ... rest of the code ...
      });
      });
    });