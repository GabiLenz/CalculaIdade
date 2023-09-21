function calculaIdade(anoNascimento, anoAtual) {
    if (anoNascimento <= anoAtual) {
        const idade = anoAtual - anoNascimento;
        return `Você tem ${idade} anos de idade.`;
    } else {
        return "Erro: Ano de nascimento maior que o ano atual.";
    }
}

function calcularIdade() {
    const anoNascimento = parseInt(document.getElementById("anoNascimento").value);
    const anoAtual = parseInt(document.getElementById("anoAtual").value);
    const resultadoElement = document.getElementById("resultado");

    if (!isNaN(anoNascimento) && !isNaN(anoAtual)) {
        const resultado = calculaIdade(anoNascimento, anoAtual);
        resultadoElement.textContent = resultado;
        resultadoElement.classList.remove("error");
    } else {
        resultadoElement.textContent = "Por favor, insira valores válidos.";
        resultadoElement.classList.add("error");
    }
}