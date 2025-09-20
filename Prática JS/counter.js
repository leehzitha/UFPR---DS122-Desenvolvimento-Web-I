const soma = document.getElementById("soma");
const menos = document.getElementById("sub");
const num = document.getElementById("number");


soma.addEventListener("click", () => {
    let number = parseInt(num.textContent);
    num.textContent = number + 1;
})

sub.addEventListener("click", () => {
    let number = parseInt(num.textContent);
    if (number - 1 < 0){
        return alert("O número não pode ser menor que zero!");
    }
    num.textContent = number - 1;
})

// sub.addEventListener("click", () => {
//     const 
// })