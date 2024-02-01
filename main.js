function validarFormulario() {
    // Obtém os valores dos campos A e B
    var valorA = document.getElementById("campoA").value;
    var valorB = document.getElementById("campoB").value;

    // Converte os valores para números
    valorA = parseFloat(valorA);
    valorB = parseFloat(valorB);

    // Verifica se B é maior que A
    if (valorB > valorA) {
        exibirMensagem("Formulário válido!", "valid");
    } else {
        exibirMensagem("Formulário inválido! O número em B deve ser maior que o número em A.", "invalid");
    }
}

function exibirMensagem(mensagem, classe) {
    var mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.innerHTML = mensagem;
    mensagemDiv.className = "message " + classe;
    mensagemDiv.style.display = "block";
}