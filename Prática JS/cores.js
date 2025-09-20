const forms = document.getElementsByClassName("forms");

function changeBackgroundColor(color){
    document.body.style.backgroundColor = color;
}

// const redButton = document.getElementById("red");
// const yellowButton = document.getElementById("yellow");
// const whiteButton = document.getElementById("white");

const colorButtons = document.getElementsByClassName("color-button");
const randomButton = document.getElementById("random-button");

randomButton.addEventListener("click", () => {
    const r = Math.floor((Math.random() * 256));
    const g = Math.floor((Math.random() * 256));
    const b = Math.floor((Math.random() * 256));

    changeBackgroundColor(`rgb(${r}, ${g}, ${b})`);
});

for (let i = 0; i < colorButtons.length; i++){
    colorButtons[i].addEventListener("click", (ev) => {changeBackgroundColor(ev.target.dataset.color)});
}

// padstart, to tostring (hex)
//JEITO PEBA DE FAZER

// redButton.addEventListener("click", () => changeBackgroundColor("red"));

// yellowButton.addEventListener("click", function(){
//    document.body.style.backgroundColor = "yellow";
// })

// whiteButton.addEventListener("click", function(){
//    document.body.style.backgroundColor = "white";
// })