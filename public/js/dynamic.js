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

  const price = document.createElement('p');
  price.textContent = `Preço: R$ ${(data.custo).toFixed(2)}`;
  price.className = 'price';

  const quantityControl = document.createElement('div');
  quantityControl.className = 'quantityControl';

  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.value = 0;
  quantityInput.min = 0;
  quantityInput.className = 'quantityInput';

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
      1: document.getElementById('tortasSalgadasContainer'),
      2: document.getElementById('miniDeliciasContainer'),
      3: document.getElementById('docesTradicionaisContainer'),
      4: document.getElementById('docesEspeciaisContainer'),
      5: document.getElementById('salgadosAssadosContainer'),
      6: document.getElementById('salgadosTradicionaisContainer'),
      7: document.getElementById('salgadosEspeciaisContainer')
  };

  Object.values(containers).forEach(container => {
      container.style.display = 'none';
      container.innerHTML = '';
  });

  const container = containers[categoryId];
  if (container) {
      container.style.display = 'flex';
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
