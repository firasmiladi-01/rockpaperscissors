const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const choice = document.querySelector("#choice");
const opChoice = document.querySelector("#opChoice");
const before = document.querySelector("div #player div.before");
const after = document.querySelector("div #player div.after");
const opbefore = document.querySelector("div #opponent div.before");
const opafter = document.querySelector("div #opponent div.after");
const header = document.querySelector("#header");
var number = 0;
rock.addEventListener(
    'click',
    () => {
        after.style.display = "block";
        before.style.display = "none";
        choice.setAttribute("src", "assets/img/rock.svg");
        number = parseInt(Math.random() * 3);
        if (number == 0) {
            opChoice.setAttribute("src", "assets/img/rock.svg");
            header.textContent = "tie !";
        }
        if (number == 1) {
            opChoice.setAttribute("src", "assets/img/paper.svg");
            header.textContent = "you lost , try again";
        }
        if (number == 2) {
            opChoice.setAttribute("src", "assets/img/scissors.svg");
            header.textContent = "you won !";
        }
        opbefore.style.display = "none";
        opafter.style.display = "block";
        setTimeout(
            () => {
                header.textContent = "rock paper scissors";
                after.style.display = "none";
                before.style.display = "block";
                opbefore.style.display = "block";
                opafter.style.display = "none";
            },
            3000
        )
    }
)
paper.addEventListener(
    'click',
    () => {
        after.style.display = "block";
        before.style.display = "none";
        choice.setAttribute("src", "assets/img/paper.svg");
        number = parseInt(Math.random() * 3);
        if (number == 0) {
            opChoice.setAttribute("src", "assets/img/rock.svg");
            header.textContent = "you won !";
        }
        if (number == 1) {
            opChoice.setAttribute("src", "assets/img/paper.svg");
            header.textContent = "tie !";
        }
        if (number == 2) {
            opChoice.setAttribute("src", "assets/img/scissors.svg");
            header.textContent = "you lost , try again";
        }
        opbefore.style.display = "none";
        opafter.style.display = "block";
        setTimeout(
            () => {
                header.textContent = "rock paper scissors";
                after.style.display = "none";
                before.style.display = "block";
                opbefore.style.display = "block";
                opafter.style.display = "none";
            },
            3000
        )
    }
)
scissors.addEventListener(
    'click',
    () => {
        after.style.display = "block";
        before.style.display = "none";
        choice.setAttribute("src", "assets/img/scissors.svg");
        number = parseInt(Math.random() * 3);
        if (number == 0) {
            opChoice.setAttribute("src", "assets/img/rock.svg");
            header.textContent = "you lost , try again";
        }
        if (number == 1) {
            opChoice.setAttribute("src", "assets/img/paper.svg");
            header.textContent = "you won !";
        }
        if (number == 2) {
            opChoice.setAttribute("src", "assets/img/scissors.svg");
            header.textContent = "tie !";
        }
        opbefore.style.display = "none";
        opafter.style.display = "block";
        setTimeout(
            () => {
                header.textContent = "rock paper scissors";
                after.style.display = "none";
                before.style.display = "block";
                opbefore.style.display = "block";
                opafter.style.display = "none";
            },
            3000
        )

    }
)
