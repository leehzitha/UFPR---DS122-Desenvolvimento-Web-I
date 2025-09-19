const button = document.getElementById('botao');

button.addEventListener("click", function(){
    const name = document.getElementById("name");
    const userName = name.value;

    if(userName === ""){
        return (alert("Preencha seu nome, por favor!"))
    }
    alert(`Bem-vindo, ${userName}!`);
})