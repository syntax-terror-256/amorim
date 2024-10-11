var categorias;
var produtos;

async function fetchData() {
  try {
    const categoriasResponse = await fetch('/database/CategoriasComuns');
    categorias = await categoriasResponse.json();

    const produtosResponse = await fetch('/database/ProdutosComuns');
    produtos = await produtosResponse.json();

    console.log(categorias, produtos);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData().then(() => {
  function createDivFromProduct(data) {
    const div = document.createElement('div');
    div.className = 'product-div';

    const img = document.createElement('img');
    img.src = data.imagem;
    img.alt = data.nome;

    const textContainer = document.createElement('div');
    textContainer.className = 'text-container';

    const name = document.createElement('h2');
    name.textContent = data.nome;
    textContainer.appendChild(name);

    const description = document.createElement('p');
    description.textContent = data.info;
    textContainer.appendChild(description);

    const price = document.createElement('p');
    price.textContent = `Preço: R$ ${(data.custo).toFixed(2)}`;
    price.className = 'price';

    const quantityControl = document.createElement('div');
    quantityControl.className = 'quantity-control';

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = 0;
    quantityInput.min = 0;
    quantityInput.className = 'quantity-input';

    const incrementButton = document.createElement('button');
    incrementButton.textContent = '+';
    incrementButton.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    const decrementButton = document.createElement('button');
    decrementButton.textContent = '-';
    decrementButton.addEventListener('click', () => {
        quantityInput.value = Math.max(0, parseInt(quantityInput.value) - 1);
    });

    quantityControl.appendChild(decrementButton);
    quantityControl.appendChild(quantityInput);
    quantityControl.appendChild(incrementButton);

    div.appendChild(img);
    div.appendChild(textContainer);
    div.appendChild(price);
    div.appendChild(quantityControl);

    return div;
  }

  function showProducts(categoryId) {
    const containers = {
        1: document.getElementById('tortas-salgadas-container'),
        2: document.getElementById('mini-delicias-container'),
        3: document.getElementById('doces-tradicionais-container'),
        4: document.getElementById('doces-especiais-container'),
        5: document.getElementById('salgados-assados-container'),
        6: document.getElementById('salgados-tradicionais-container'),
        7: document.getElementById('salgados-especiais-container')
    };

    const container = containers[categoryId];
    if (container) {
        container.style.display = 'flex';
        produtos.filter(product => product.categoria_id === categoryId).forEach(product => {
            const productDiv = createDivFromProduct(product);
            container.appendChild(productDiv);
        });
    }
  }

  showProducts(1);
  showProducts(2);
  showProducts(3);
  showProducts(4);
  showProducts(5);
  showProducts(6);
  showProducts(7);
});


const showSalgadosBtn = document.getElementById("show-salgados")
const showDocesBtn = document.getElementById("show-doces")
const showOutrosBtn = document.getElementById("show-outros")

showSalgadosBtn.addEventListener('click', () => {
  document.querySelectorAll(".container-categoria").forEach((element) => {
    if (element.id != 'salgados') {
      element.style.display = 'none'
    }
    else {
      element.style.display = ''
    }
  })
})

showDocesBtn.addEventListener('click', () => {
  document.querySelectorAll(".container-categoria").forEach((element) => {
    if (element.id != 'doces') {
      element.style.display = 'none'
    }
    else {
      element.style.display = ''
    }
  })
})

showOutrosBtn.addEventListener('click', () => {
  document.querySelectorAll(".container-categoria").forEach((element) => {
    if (element.id != 'outros') {
      element.style.display = 'none'
    }
    else {
      element.style.display = ''
    }
  })
})