// Selecionando os elementos do DOM
const btnDecrementar = document.getElementById('decrementar');
const btnIncrementar = document.getElementById('incrementar');
const inputPeso = document.getElementById('peso');

// Função para incrementar o valor
btnIncrementar.addEventListener('click', () => {
    let valorAtual = parseInt(inputPeso.value);
    if (valorAtual < 10) { // Limite máximo de 10 kg
        inputPeso.value = valorAtual + 1;
    }
});

// Função para decrementar o valor
btnDecrementar.addEventListener('click', () => {
    let valorAtual = parseInt(inputPeso.value);
    if (valorAtual > 1) { // Limite mínimo de 1 kg
        inputPeso.value = valorAtual - 1;
    }
});
