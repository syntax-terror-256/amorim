function createDivFromProduct(data) {
  const div = document.createElement('div');
  div.className = 'productDiv';

  const img = document.createElement('img');
  img.src = data.imagem;
  img.alt = data.nome;

  const textContainer = document.createElement('div');
  textContainer.className = 'textContainer';

  const name = document.createElement('h2');
  name.textContent = data.nome;
  textContainer.appendChild(name);

  const description = document.createElement('p');
  description.textContent = data.info;
  textContainer.appendChild(description);

  const priceQuantityContainer = document.createElement('div');
  priceQuantityContainer.className = 'priceQuantityContainer';

  const price = document.createElement('p');
  price.textContent = `Preço: R$ ${(data.custo).toFixed(2)}`;
  price.className = 'price';
  priceQuantityContainer.appendChild(price);

  const quantity = document.createElement('div');
  quantity.className = 'quantityControl';

  const baseDeCalculo = data.base_de_calculo;
  const quantidadeMinima = data.quantidade_minima;

  const decrementButton = document.createElement('button');
  decrementButton.textContent = '-';
  decrementButton.disabled = true;

  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.value = 0;
  quantityInput.min = 0;
  quantityInput.className = 'quantityInput';

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
        1: document.getElementById('tortasSalgadasContainer'),
        2: document.getElementById('miniDeliciasContainer'),
        3: document.getElementById('docesTradicionaisContainer'),
        4: document.getElementById('docesEspeciaisContainer'),
        5: document.getElementById('salgadosAssadosContainer'),
        6: document.getElementById('salgadosTradicionaisContainer'),
        7: document.getElementById('salgadosEspeciaisContainer')
    };

    Object.values(containers).forEach(container => {
        if (container) container.style.display = 'none';
    });

    const container = containers[categoryId];
    if (container) {
        container.style.display = 'block';
        container.innerHTML = '';

        produtos.filter(product => product.categoria_id === categoryId).forEach(product => {
            const productDiv = createDivFromProduct(product);
            container.appendChild(productDiv);
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('showTortasSalgadasButton').addEventListener('click', () => showProducts(1));
    document.getElementById('showMiniDeliciasButton').addEventListener('click', () => showProducts(2));
    document.getElementById('showDocesTradicionaisButton').addEventListener('click', () => showProducts(3));
    document.getElementById('showDocesEspeciaisButton').addEventListener('click', () => showProducts(4));
    document.getElementById('showSalgadosAssadosButton').addEventListener('click', () => showProducts(5));
    document.getElementById('showSalgadosTradicionaisButton').addEventListener('click', () => showProducts(6));
    document.getElementById('showSalgadosEspeciaisButton').addEventListener('click', () => showProducts(7));
});
