let botao = document.getElementById("button");
let input = document.getElementById("input");
let resultadoDiv = document.getElementById("resultado")
 
////
let informacao = parseInt(input.value);


botao.addEventListener("click", function() {
    
    informacao = parseInt(input.value);
    
    // aqui eu coloquei a informação do input dentro da variável informação quando cliquei no botão
    if (isNaN(informacao)) {
        mostrarErro(input.value);
    } else {
        mostrarTabuada();
    }
});


function mostrarTabuada() {

    informacao = parseInt(input.value);

    resultadoDiv.innerHTML = ""; // se o input não for um número, ele não imprime nada na div resultado

    // criando o loop de 1 até 100
    for (let i = 1; i <= 100; i++) {
        // multiplicandoa informacao pelo valor do loop
        let resultado = informacao * i;

        // agora, exibindo o resultado na tela 
        resultadoDiv.innerHTML += informacao + " x " + i + "=" + resultado + "<br>";
    }
}

function mostrarErro(valor) {
    resultadoDiv.innerHTML = "Por favor, insira um número válido. " + valor + " não é válido"
}
