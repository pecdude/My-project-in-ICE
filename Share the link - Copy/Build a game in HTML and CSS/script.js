

// Get the Dom elements and initialize the game
const input = document.querySelector("input");
const guess = document.querySelector(".guess");
const checkButton = document.querySelector("button");
const remainChances = document.querySelector(".chances");

// Set the focus on input field
input.focus();

let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);
let chance = 10;

// Listen for the click event on the check button
checkButton.addEventListener("click", () => {
  // Decrement the chance variable on every click
  chance--;

  // Display remaining chances
  remainChances.textContent = `Remaining chances: ${chance}`;

  // Get the value from the input field
  let inputValue = input.value;

  // Check if the input value is within the range of 1 to 100
  if (inputValue < 1 || inputValue > 100) {
    guess.textContent = "Please enter a number between 1 and 100.";
    guess.style.color = "#DE0611";
    return;
  }

  // Check if the input value is equal to the random number
  if (Number(inputValue) === randomNum) {
    // Update guessed number, disable input, check button text and color.
    guess.textContent = "Congratulations, you won the game!";
    checkButton.textContent = "Replay";
    guess.style.color = "#333";

    // Add an event listener to the checkButton to reset the game when replay is clicked
    checkButton.addEventListener("click", () => {
      window.location.reload();
    });
  }
  // Check if input is > random number and within 1-99 range.
  else if (inputValue > randomNum && inputValue < 100) {
    guess.textContent = "Your guess is high";
    guess.style.color = "#333";
  }
  // Check if input value is < random number and within 1-99 range.
  else if (inputValue < randomNum && inputValue > 0) {
    guess.textContent = "Your guess is low";
    guess.style.color = "#333";
  }
  // If the input value is not within the range of 1 to 99
  else {
    // Update the guessed number text, color and remaining chances
    guess.textContent = "Invalid input. Please enter a number between 1 and 100.";
    guess.style.color = "#333";
  }

  // Check if the chance is zero
  if (chance == 0) {
    //Update check button, disable input, and clear input value.
    // Update guessed number text and color to indicate user loss.
    checkButton.textContent = "Replay";
    input.disabled = true;
    input.value = "";
    guess.textContent = "You lost the game";
    guess.style.color = "#DE0611";

    // Add an event listener to the checkButton to reset the game when replay is clicked
    checkButton.addEventListener("click", () => {
      window.location.reload();
    });
  }

  if (chance < 0) {
    window.location.reload();
  }
});


