let result = document.getElementById("gameResult");
let Input = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessedNumber = parseInt(Input.value);
    if (guessedNumber > randomNumber) {
        result.textContent = "To High! Try Again.";
        result.style.backgroundColor = "#1e217c";
    } else if (guessedNumber < randomNumber) {
        result.textContent = "Too Low! try Again.";
        result.style.backgroundColor = "#1e217c";
    } else if (guessedNumber === randomNumber) {
        result.textContent = "Congratulations! You got it right.";
        result.style.backgroundColor = "green";
    } else {
        result.textContent = "Please provide a valid input.";
        result.style.backgroundColor = "#1e217c";
    }
}
