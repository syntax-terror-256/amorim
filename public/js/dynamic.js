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
    // cria todo o container do produto
    const div = document.createElement('div');
    div.className = 'product-div';
    
    // cria um elemento imagem
    const img = document.createElement('img');
    img.src = data.imagem;
    img.alt = data.nome;
  
    // cria um container para textos
    const textContainer = document.createElement('div');
    textContainer.className = 'text-container';
    
    // cria um elemento para o nome do produto
    const name = document.createElement('h2');
    name.textContent = data.nome;
    textContainer.appendChild(name);

    // cria um elemento para o preço base
    const basePrice = document.createElement('p');
    basePrice.textContent = `R$ ${(data.custo).toFixed(2)}`;
    basePrice.className = 'price';
    textContainer.appendChild(basePrice)
    
    // cria um elemento para a descrição do produto
    const description = document.createElement('p');
    description.textContent = data.info;
    textContainer.appendChild(description);
    
    // cria um container para o controle de preço
    const priceQuantityContainer = document.createElement('div');
    priceQuantityContainer.className = 'price-quantity-container';
    
    // cria um elemento de texto para o preço
    const price = document.createElement('p');
    price.textContent = `Total: R$ ${(0).toFixed(2)}`;
    price.className = 'price';
    
    // cria um container para controle de adição ou remoção de itens
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

    priceQuantityContainer.appendChild(quantity);
    priceQuantityContainer.appendChild(price);
  
    // Lógica para controlar a quantidade
    incrementButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue === 0) {
            quantityInput.value = quantidadeMinima;
            price.textContent = `Total: R$ ${(quantidadeMinima*data.custo).toFixed(2)}`
        } else {
            const newValue = currentValue + baseDeCalculo;
            quantityInput.value = newValue;
            price.textContent = `Total: R$ ${(newValue*data.custo).toFixed(2)}`
        }
        decrementButton.disabled = false; 
    });
  
    decrementButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > quantidadeMinima) {
          const newValue = currentValue - baseDeCalculo;
          quantityInput.value = newValue;
          price.textContent = `Total: R$ ${(newValue*data.custo).toFixed(2)}`
        } else {
            quantityInput.value = 0; // Se for igual ou menor que a quantidade mínima, vai para 0
            price.textContent = `Total: R$ ${(0).toFixed(2)}`
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