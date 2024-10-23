// Selecionando os elementos do DOM
const saborSelect = document.getElementById('sabor');
const imagemBolo = document.getElementById('imagem-bolo');

// Mapeamento dos sabores para URLs de imagens
const imagens = {
    chocolate: "https://www.estadao.com.br/resizer/oFDrDp3xgfze9zuyNaR5gnyURVA=/arc-anglerfish-arc2-prod-estadao/public/FIVYQFU6J5ND3PYRA6XQHR4NW4.jpg",
    baunilha: "https://guiadacozinha.com.br/wp-content/uploads/2019/10/bolo-simples-com-baunilha-9869.jpg",
    morango: "https://www.ecompletocdn.com.br/i/fp/1178/1521968_3_1692801048.jpg",
    limão: "https://i.ytimg.com/vi/o5LJjeDtCo0/maxresdefault.jpg",
    coco: "https://receitatodahora.com.br/wp-content/uploads/2023/02/bolo-de-coco-14-02.jpg"
};

// Função para trocar a imagem com base no sabor selecionado
saborSelect.addEventListener('change', () => {
    const sabor = saborSelect.value;
    imagemBolo.src = imagens[sabor];
    imagemBolo.alt = `Imagem do Bolo de ${sabor.charAt(0).toUpperCase() + sabor.slice(1)}`;
});

// Funções de incremento e decremento
const btnDecrementar = document.getElementById('decrementar');
const btnIncrementar = document.getElementById('incrementar');
const inputPeso = document.getElementById('peso');
const btnAdicionar = document.getElementById('adicionar');

btnIncrementar.addEventListener('click', () => {
    let valorAtual = parseFloat(inputPeso.value);
    if (valorAtual < 10) { // Limite máximo de 10 kg
        inputPeso.value = (valorAtual + 0.5).toFixed(1);
    }
});

btnDecrementar.addEventListener('click', () => {
    let valorAtual = parseFloat(inputPeso.value);
    if (valorAtual > 0.5) { // Limite mínimo de 0.5 kg
        inputPeso.value = (valorAtual - 0.5).toFixed(1);
    }
});

btnAdicionar.addEventListener('click', () => {
    alert(`Você adicionou ${inputPeso.value} kg de bolo de ${saborSelect.value} ao carrinho!`);
});
document.getElementById('quantidade').addEventListener('change', function() {
    const quantidade = this.value;
    const seletorSabor = document.getElementById('seletor-sabor');
    
    // Esconde todos os seletores de sabor inicialmente
    const sabores = document.querySelectorAll('.sabor');
    sabores.forEach(sabor => sabor.style.display = 'none');
    
    // Mostra o contêiner de seleção de sabores
    if (quantidade) {
        seletorSabor.style.display = 'flex'; // Mostra o contêiner de sabores

        // Exibe a quantidade de seletores de sabor de acordo com o valor selecionado
        for (let i = 1; i <= quantidade; i++) {
            document.getElementById(`sabor${i}`).style.display = 'block';
            document.getElementById(`label-sabor${i}`).style.display = 'block';
        }
    } else {
        seletorSabor.style.display = 'none'; // Oculta o contêiner de sabores
    }
});
