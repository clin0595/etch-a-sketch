let container = document.querySelector("#container");
let userInput = 16;

for (i = 0; i < (userInput*userInput); i++) {
        const square = document.createElement("div");
        container.appendChild(square)
        square.addEventListener('mouseenter', () => {changeColor(square)});
        let sqSize = 800/userInput;
        square.style.width = `${sqSize}px`;
        square.style.height = `${sqSize}px`;
    }

const btn = document.createElement("button");
btn.textContent = "Change resolution"

btn.addEventListener('click', () => {
    userInput = prompt("How many squares would you want for each side? Max: 100");
    if (userInput <= 100) {
        makeSquares(userInput);
    }
});

document.body.appendChild(btn)


function changeColor(sq) {
    sq.style.backgroundColor = "blue";
}

function makeSquares(userInput) {
    container.innerHTML = "";
    for (i = 0; i < (userInput*userInput); i++) {
        const square = document.createElement("div");
        container.appendChild(square)
        square.addEventListener('mouseenter', () => {changeColor(square)});
        let sqSize = 800/userInput;
        square.style.width = `${sqSize}px`;
        square.style.height = `${sqSize}px`;
    }

}

