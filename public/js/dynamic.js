var categorias;
var produtos;

async function fetchData() {
  try {
    const categoriasResponse = await fetch('/database/CategoriasComuns');
    categorias = await categoriasResponse.json();

    const produtosResponse = await fetch('/database/ProdutosComuns');
    produtos = await produtosResponse.json();

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
  
    const priceQuantityContainer = document.createElement('div');
    priceQuantityContainer.className = 'price-quantity-container';
  
    const price = document.createElement('p');
    price.textContent = `Preço: R$ ${(data.custo).toFixed(2)}`;
    price.className = 'price';
    priceQuantityContainer.appendChild(price);
  
    const quantity = document.createElement('div');
    quantity.className = 'quantity-control';
  
    const baseDeCalculo = data.base_de_calculo;
    const quantidadeMinima = data.quantidade_minima;
  
    const decrementButton = document.createElement('button');
    decrementButton.textContent = '-';
    decrementButton.disabled = true;
  
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = 0;
    quantityInput.min = 0;
    quantityInput.className = 'quantity-input';
  
    const incrementButton = document.createElement('button');
    incrementButton.textContent = '+';
  
    // Lógica para controlar a quantidade
    incrementButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue === 0) {
            quantityInput.value = quantidadeMinima;
        } else {
            quantityInput.value = currentValue + baseDeCalculo;
        }
        decrementButton.disabled = false; 
    });
  
    decrementButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > quantidadeMinima) {
            quantityInput.value = currentValue - baseDeCalculo;
        } else {
            quantityInput.value = 0; // Se for igual ou menor que a quantidade mínima, vai para 0
        }
        decrementButton.disabled = quantityInput.value == 0;
    });
  
    // Validação ao perder o foco
      quantityInput.addEventListener('blur', () => {
        let currentValue = parseInt(quantityInput.value);
    
        // Ajusta para múltiplos de baseDeCalculo
        if (currentValue % baseDeCalculo !== 0) {
            currentValue = Math.floor(currentValue / baseDeCalculo) * baseDeCalculo;
        }
    
        // Garante que o valor não seja menor que a quantidade mínima
        if (currentValue < quantidadeMinima) {
            currentValue = quantidadeMinima; // Define para a quantidade mínima
        }
    
        quantityInput.value = currentValue;
        decrementButton.disabled = quantityInput.value == 0;
    });
  
    quantity.appendChild(decrementButton);
    quantity.appendChild(quantityInput);
    quantity.appendChild(incrementButton);
    priceQuantityContainer.appendChild(quantity);
  
    div.appendChild(img);
    div.appendChild(textContainer);
    div.appendChild(priceQuantityContainer);
  
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