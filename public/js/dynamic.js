const categorias = [
    { categoria_id: 1, nome: 'Tortas Salgadas' },
    { categoria_id: 2, nome: 'Mini Delícias' },
    { categoria_id: 3, nome: 'Doces Tradicionais' },
    { categoria_id: 4, nome: 'Doces Especiais' },
    { categoria_id: 5, nome: 'Salgados Assados' },
    { categoria_id: 6, nome: 'Salgados Tradicionais' },
    { categoria_id: 7, nome: 'Salgados Especiais' }
];

const produtos = [
    {
        produto_id: 1,
        nome: 'Mini Burguer',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 2,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 6,
        base_de_calculo: 1,
        quantidade_minima: 20
      },
      {
        produto_id: 2,
        nome: 'Mini Hot Dog',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 2,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 5,
        base_de_calculo: 1,
        quantidade_minima: 20
      },
      {
        produto_id: 3,
        nome: 'Empada de Frango',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 5,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 200,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 4,
        nome: 'Mini Pizza',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 2,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 4,
        base_de_calculo: 1,
        quantidade_minima: 20
      },
      {
        produto_id: 5,
        nome: 'Mini Quiches',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 5,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 300,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 6,
        nome: 'Mini Burguer Especial',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 2,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 7,
        base_de_calculo: 1,
        quantidade_minima: 20
      },
      {
        produto_id: 7,
        nome: 'Mini Esfirras',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 5,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 300,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 8,
        nome: 'Mini Caprese',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 2,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 6,
        base_de_calculo: 1,
        quantidade_minima: 20
      },
      {
        produto_id: 9,
        nome: 'Cartucho de Camarão',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 5,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 180,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 10,
        nome: 'Mini Pãozinho Delícia',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 2,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 5,
        base_de_calculo: 1,
        quantidade_minima: 20
      },
      {
        produto_id: 11,
        nome: 'Cartucho de Frango',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 5,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 150,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 12,
        nome: 'Pastel Húngaro',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 5,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 200,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 13,
        nome: 'Coxinha de Frango',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 6,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 150,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 14,
        nome: 'Risoles de Carne',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 6,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 150,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 15,
        nome: 'Bolinho de Pizza',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 6,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 150,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 17,
        nome: 'Brigadeiro',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 3,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 180,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 16,
        nome: 'Empadão de Frango M',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 1,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 100,
        base_de_calculo: 1,
        quantidade_minima: 1
      },
      {
        produto_id: 18,
        nome: 'Croquete de Camarão',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 6,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 150,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 19,
        nome: 'Empadão de Frango G',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 1,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 150,
        base_de_calculo: 1,
        quantidade_minima: 1
      },
      {
        produto_id: 20,
        nome: 'Beijinho',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 3,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 180,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 21,
        nome: 'Kibe',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 6,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 150,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 22,
        nome: 'Empadão de Camarão',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 1,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 200,
        base_de_calculo: 1,
        quantidade_minima: 1
      },
      {
        produto_id: 23,
        nome: 'Casadinho',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 3,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 180,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 24,
        nome: 'Quiche de Carne de Sol',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 1,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 180,
        base_de_calculo: 1,
        quantidade_minima: 1
      },
      {
        produto_id: 25,
        nome: 'Ninho',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 3,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 180,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 26,
        nome: 'Quiche de Queijo',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 1,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 180,
        base_de_calculo: 1,
        quantidade_minima: 1
      },
      {
        produto_id: 27,
        nome: 'Churros',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 3,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 180,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 28,
        nome: 'Pão de Metro frango',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 1,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 180,
        base_de_calculo: 1,
        quantidade_minima: 1
      },
      {
        produto_id: 29,
        nome: 'Surpresa de Uva',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 3,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 180,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 30,
        nome: 'Romeu e Julieta',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 3,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 180,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 31,
        nome: 'Ninho + Nutella',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 4,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 230,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 32,
        nome: 'Olho de sogra (ameixa)',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 4,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 230,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 34,
        nome: 'Ouriço (coco queimado)',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 4,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 230,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
      },
      {
        produto_id: 33,
        nome: 'Camarão Empanado',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 7,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 300,
        base_de_calculo: 100,
        quantidade_minima: 100
      },
      {
        produto_id: 35,
        nome: 'Patinha Empanada',
        imagem: 'https://img.freepik.com/fotos-gratis/pessoa-com-transtorno-alimentar-tentando-se-alimentar-de-maneira-saudavel_23-2149243045.jpg',
        categoria_id: 7,
        info: 'Ingredientes principais: farinha, açúcar, manteiga e ovos.',
        custo: 300,
        base_de_calculo: 100,
        quantidade_minima: 100
      }
];

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

const input = document.getElementById('uploadImage');
const productDiv = document.getElementById('productDiv');

input.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;

        productDiv.innerHTML = '';
        productDiv.appendChild(img);
    };

    reader.readAsDataURL(file);
});
