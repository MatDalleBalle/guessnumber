
console.log("Jeg er i guessnumber");

// Selecting elements
const lbMessage = document.querySelector(".message");
const lbNumber = document.querySelector(".number");
const lbScore = document.querySelector(".score");
const lbHighscore = document.querySelector(".highscore");
const inpGuess = document.querySelector(".guess");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;  // Generere et tilfældigt tal mellem 1 og 20
let score = 20; // Score starter på 20
let highscore = 0; // Highscore starter på 0

const displayMessage = function (message) {
    lbMessage.textContent = message;    // Funktion til at ændre teksten i lbMessage
};

// Event listener for check button
btnCheck.addEventListener("click", function () {
    const guess = Number(inpGuess.value); // Konverterer input til et tal

    if (!guess){ // Hvis der ikke er indtastet noget
        displayMessage("⛔️ No number!");
    } else if (guess === secretNumber) { // Hvis gættet er det samme som secretNumber
        displayMessage("🎉 Correct Number!");
        lbNumber.textContent = secretNumber;
        document.body.style.backgroundColor = "#60b347"; // Farver baggrunden når spilleren har vundet spillet
        lbNumber.style.width = "30rem"; // Ændre bredden på nummeret når spilleren har vundet spillet

        if (score > highscore) {    // Hvis score er større end highscore, så bliver highscore ændret til score
            highscore = score;
            lbHighscore.textContent = highscore; // Ændre teksten i lbHighscore
        }
    } else if (guess !== secretNumber) { // Hvis gættet ikke er det samme som secretNumber
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
            score--;
            lbScore.textContent = score;
        } else {
            displayMessage("💥 You lost the game!");
            lbScore.textContent = 0;
            document.body.style.backgroundColor = "#773131"; // Farver baggrunden når spilleren har tabt spillet

        }
    }
});

// Event listener for again button
btnAgain.addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start guessing...");
    lbScore.textContent = score;
    lbNumber.textContent = "?";
    inpGuess.value = "";

    document.body.style.backgroundColor = "#222";
    lbNumber.style.width = "15rem";

    //tilføjer fade-in animation
    document.body.classList.add("fade-in");
   // Fjerner fade-in animation efter 0.5 sekunder for at kunne køre animationen igen
    setTimeout(function() {
        document.body.classList.remove("fade-in");
    }, 500);
});
