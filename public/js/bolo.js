// Selecionando os elementos do DOM
const btnDecrementar = document.getElementById('decrementar');
const btnIncrementar = document.getElementById('incrementar');
const inputPeso = document.getElementById('peso');


// Função para incrementar o valor
btnIncrementar.addEventListener('click', () => {
    let valorAtual = parseFloat(inputPeso.value);
    if (valorAtual < 10) { // Limite máximo de 10 kg
        inputPeso.value = (valorAtual + 0.5).toFixed(1);
    }
});

// Função para decrementar o valor
btnDecrementar.addEventListener('click', () => {
    let valorAtual = parseFloat(inputPeso.value);
    if (valorAtual > 0.5) { // Limite mínimo de 0.5 kg
        inputPeso.value = (valorAtual - 0.5).toFixed(1);
    }
});
// Função para o botão "Adicionar"
btnAdicionar.addEventListener('click', () => {
    alert(`Você adicionou ${inputPeso.value} kg de bolo ao carrinho!`);
});