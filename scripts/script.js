// input dos valores
let altura = document.getElementById('altura');
let peso = document.getElementById('peso');
let botao = document.getElementById('botao');


// output dos valores
let resultadoImc = document.getElementById('resultado-imc');
let resultadoclassificacao = document.getElementById('resultado-classificacao');
let resultadograu = document.getElementById('resultado-grau');


botao.addEventListener('click', function() {
    let alturaValor = parseFloat(altura.value);
    let pesoValor = parseFloat(peso.value);
    let imc = pesoValor / (alturaValor * alturaValor);
    if(isNaN(imc)) {
        resultadoImc.textContent = ""
        resultadoclassificacao.textContent = "";
        resultadograu.textContent = ""

    } else {
        resultadoImc.textContent = imc.toFixed(2);

        if (imc < 18.5) {
            resultadoclassificacao.textContent = "Magreza";
            resultadograu.textContent = '0'
    
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultadoclassificacao.textContent = "Normal";
            resultadograu.textContent = '0'
    
        } else if (imc >= 25 && imc <= 29.9) {
            resultadoclassificacao.textContent = "Sobrepeso";
            resultadograu.textContent = '1'
    
        } else if (imc >= 30 && imc <= 39.9) {
            resultadoclassificacao.textContent = "Obesidade";
            resultadograu.textContent = '2'
    
        } else {
            resultadoclassificacao.textContent = "Obesidade Grave";
            resultadograu.textContent = '3'
    
        }

    }

});
