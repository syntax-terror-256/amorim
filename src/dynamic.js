const products = [
    {
        id: "3c50447c-bb14-4558-aafc-1038029b856b",
        nome: "Torta de camarão",
        descrição: "Uma torta feita de camarão.",
        imagem: "https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg?w=740&t=st=1725929426~exp=1725930026~hmac=042bd2ae7780160afb2705ada4a6a31e6c65c9dedc3439ae9ee1ad3b7a9c3146",
        categoria: "Tortas",
        preco_unidade: 20.00,
        quantidade_minima: 20,
        quantidade_adicionada: 10,
        antecedencia: false,
    },
    {
        id: "1a2b3c4d-e5f6-7890-abcd-ef1234567890",
        nome: "Torta de maçã",
        descrição: "Uma torta deliciosa de maçã.",
        imagem: "https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg?w=740&t=st=1725929426~exp=1725930026~hmac=042bd2ae7780160afb2705ada4a6a31e6c65c9dedc3439ae9ee1ad3b7a9c3146", // Substitua com uma URL direta
        categoria: "Tortas",
        preco_unidade: 15.00,
        quantidade_minima: 15,
        quantidade_adicionada: 5,
        antecedencia: true,
    },
    {
        id: "5f6e7d8c-9b0a-1b2c-3d4e-567890abcdef",
        nome: "Bolo de chocolate",
        descrição: "Um bolo de chocolate saboroso.",
        imagem: "./Imagem/Rogéria Amorim.jpeg",
        categoria: "Bolos",
        preco_unidade: 25.00,
        quantidade_minima: 10,
        quantidade_adicionada: 8,
        antecedencia: false,
    },
    {
        id: "7a8b9c0d-1e2f-3g4h-5i6j-7890klmnopqrst",
        nome: "Coxinha",
        descrição: "Deliciosa coxinha de frango.",
        imagem: "https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg?w=740&t=st=1725929426~exp=1725930026~hmac=042bd2ae7780160afb2705ada4a6a31e6c65c9dedc3439ae9ee1ad3b7a9c3146",
        categoria: "Salgados",
        preco_unidade: 5.00,
        quantidade_minima: 50,
        quantidade_adicionada: 30,
        antecedencia: true,
    },
    {
        id: "9b0c1d2e-3f4g-5h6i-7j8k-90lmnopqrstu",
        nome: "Brigadeiro",
        descrição: "Docinho de chocolate brasileiro.",
        imagem: "https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg?w=740&t=st=1725929426~exp=1725930026~hmac=042bd2ae7780160afb2705ada4a6a31e6c65c9dedc3439ae9ee1ad3b7a9c3146",
        categoria: "Doces",
        preco_unidade: 2.00,
        quantidade_minima: 100,
        quantidade_adicionada: 60,
        antecedencia: false,
    }
];

function createDivFromProduct(data) {
    const div = document.createElement('div');
    div.className = 'productDiv';

    // Adiciona a imagem
    const img = document.createElement('img');
    img.src = data.imagem;
    img.alt = data.nome;

    // Adiciona o container para o texto
    const textContainer = document.createElement('div');
    textContainer.className = 'textContainer';

    // Adiciona o nome
    const name = document.createElement('h2');
    name.textContent = data.nome;
    textContainer.appendChild(name);

    // Adiciona a descrição
    const description = document.createElement('p');
    description.textContent = data.descrição;
    textContainer.appendChild(description);

    // Adiciona o container para preço e quantidade
    const priceQuantityContainer = document.createElement('div');
    priceQuantityContainer.className = 'priceQuantityContainer';

    // Adiciona o preço
    const price = document.createElement('p');
    price.textContent = `Preço: R$ ${data.preco_unidade.toFixed(2)}`;
    price.className = 'price';
    priceQuantityContainer.appendChild(price);

    // Adiciona a quantidade
    const quantity = document.createElement('p');
    quantity.textContent = `Quantidade: ${data.quantidade_adicionada}`;
    quantity.className = 'quantity';
    priceQuantityContainer.appendChild(quantity);

    // Adiciona imagem e texto ao container principal
    div.appendChild(img);
    div.appendChild(textContainer);
    div.appendChild(priceQuantityContainer);

    return div;
}

// Função para mostrar produtos por categoria
function showProducts(category) {
    const containers = {
        "Tortas": document.getElementById('tortasContainer'),
        "Bolos": document.getElementById('bolosContainer'),
        "Salgados": document.getElementById('salgadosContainer'),
        "Doces": document.getElementById('docesContainer')
    };

    // Oculta todas as seções que ainda não foram exibidas
    Object.values(containers).forEach(container => {
        container.style.display = 'none';
    });

    // Mostra a seção da categoria selecionada
    const container = containers[category];
    if (container) {
        container.style.display = 'block';
        container.innerHTML = ''; // Limpa o conteúdo existente

        // Adiciona os produtos da categoria ao container
        products.filter(product => product.categoria === category).forEach(product => {
            const productDiv = createDivFromProduct(product);
            container.appendChild(productDiv);
        });
    }
}

// Configura os botões para mostrar os produtos da categoria correspondente
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('showTortasButton').addEventListener('click', () => showProducts('Tortas'));
    document.getElementById('showBolosButton').addEventListener('click', () => showProducts('Bolos'));
    document.getElementById('showSalgadosButton').addEventListener('click', () => showProducts('Salgados'));
    document.getElementById('showDocesButton').addEventListener('click', () => showProducts('Doces'));
});
