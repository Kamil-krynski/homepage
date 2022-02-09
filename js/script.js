let playerRight = document.querySelector(".section__playerRight");
let button = document.querySelector(".js-button");
let playerLeft = document.querySelector(".section__playerLeft");


button.addEventListener("click", () => {
    if (playerRight.innerText === "Kamil Jabłoński" ) {
        playerRight.innerText = "Kamil Kryński";
    }
    else playerRight.innerText = "Kamil Jabłoński";
  
  if (playerLeft.innerText === "Lucjan Fudała") {
        playerLeft.innerText = "Kamil Kryński";
    }
    else playerLeft.innerText = "Lucjan Fudała";
  
  if (button.innerText === "Chcesz poznać prawdziwego Mistrza Polski Click!") {
        button.innerText = "Ok :) pokaż mi jednak tych faktycznych";
    }
    else button.innerText = "Chcesz poznać prawdziwego Mistrza Polski Click!";
});