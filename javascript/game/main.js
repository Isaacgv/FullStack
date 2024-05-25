const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let randomNumber = Math.floor(Math.random() * 10) 
let xAttempts = 1;

//Event listener
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", enterKey);

function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = document.querySelector("#inputNumber");

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen();

        screen2.querySelector("h2")
                .innerText = `You guessed the number in ${xAttempts} attempts!`;
        
        console.log(`You guessed the number in ${xAttempts} attempts!`)
    }

    inputNumber.value = "";
    xAttempts++;
}

function handleResetClick() {
    toggleScreen();
    xAttempts = 1;
    randomNumber = Math.floor(Math.random() * 10);
}

function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function enterKey(event) {
    if(event.key == 'Enter' && screen1.classList.contains("hide")) {
        handleResetClick();
    }
}