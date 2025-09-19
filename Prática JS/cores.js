const forms = document.getElementsByClassName("forms");

function changeBackgroundColor(color){
    document.body.style.backgroundColor = color;
}

// const redButton = document.getElementById("red");
// const yellowButton = document.getElementById("yellow");
// const whiteButton = document.getElementById("white");

const colorButtons = document.getElementsByClassName("color-button");

for (let i = 0; i < colorButtons.length; i++){
    colorButtons[i].addEventListener("click", (ev) => {changeBackgroundColor(ev.target.dataset.color)});
}


//JEITO PEBA DE FAZER

// redButton.addEventListener("click", () => changeBackgroundColor("red"));

// yellowButton.addEventListener("click", function(){
//    document.body.style.backgroundColor = "yellow";
// })

// whiteButton.addEventListener("click", function(){
//    document.body.style.backgroundColor = "white";
// })