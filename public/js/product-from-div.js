function incrementEvent(quantityInput, data, decrementButton, price) {
  console.log(data)

  let currentValue = parseInt(quantityInput.value)
  var newValue = currentValue

  if (currentValue === 0) {
    newValue = data.quantidade_minima
    quantityInput.value = newValue
    price.textContent = `Total: R$ ${(newValue * data.custo).toFixed(2)}`
  } else {
    newValue = currentValue + data.base_de_calculo
    quantityInput.value = newValue
    price.textContent = `Total: R$ ${(newValue * data.custo).toFixed(2)}`
  }
  decrementButton.disabled = false
  fetch('cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{"product_id": ${data.produto_id}, "quantity": ${newValue}}`,
  })
}

function decrementEvent(quantityInput, data, decrementButton, price) {
  let currentValue = parseInt(quantityInput.value)
  var newValue = currentValue

  if (currentValue > data.quantidade_minima) {
    newValue = currentValue - data.base_de_calculo
    quantityInput.value = newValue
    price.textContent = `Total: R$ ${(newValue * data.custo).toFixed(2)}`
  } else {
    newValue = 0
    quantityInput.value = newValue
    price.textContent = `Total: R$ ${(0).toFixed(2)}`
  }
  decrementButton.disabled = quantityInput.value == 0
  fetch('cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: `{"product_id": ${data.produto_id}, "quantity": ${newValue}}`,
  })
}

function createDivFromProduct(data) {
  // cria uma lista de callbacks
  data.EventArgsList = []
  data.base_de_calculo = 1

  // cria todo o container do produto
  const div = document.createElement('div')
  div.className = 'product-div'
  div.id = `produto-id-${data.produto_id}`

  // cria um elemento imagem
  const img = document.createElement('img')
  img.src = data.imagem
  img.alt = data.nome

  // cria um container para textos
  const textContainer = document.createElement('div')
  textContainer.className = 'text-container'

  // cria um elemento para o nome do produto
  const name = document.createElement('h2')
  name.textContent = data.nome
  textContainer.appendChild(name)

  // cria um elemento para o preço base
  const basePrice = document.createElement('p')
  basePrice.textContent = `R$ ${data.custo.toFixed(2)}`
  basePrice.className = 'price'
  textContainer.appendChild(basePrice)

  // cria um elemento para a descrição do produto
  const description = document.createElement('p')
  description.textContent = data.info
  textContainer.appendChild(description)

  // cria um container para o controle de preço
  const priceQuantityContainer = document.createElement('div')
  priceQuantityContainer.className = 'price-quantity-container'

  // cria um elemento de texto para o preço
  const price = document.createElement('p')
  price.textContent = `Total: R$ ${(0).toFixed(2)}`
  price.className = 'price'

  // cria um container para controle de adição ou remoção de itens
  let itemQuantity = 0
  let item = carrinho.cart.find((item) => item.product_id === data.produto_id)

  if (item) {
    itemQuantity = item.quantity
    price.textContent = `Total: R$ ${(itemQuantity * data.custo).toFixed(2)}`
  }

  // botão de decrementar
  const quantity = document.createElement('div')
  quantity.className = 'quantity-control'

  const decrementButton = document.createElement('button')
  decrementButton.textContent = '-'
  decrementButton.className = 'decrement'
  decrementButton.disabled = itemQuantity == 0

  const quantityInput = document.createElement('input')
  quantityInput.type = 'number'

  // botão de incrementar
  quantityInput.value = itemQuantity
  quantityInput.min = 0
  quantityInput.className = 'quantity-input'

  const incrementButton = document.createElement('button')
  incrementButton.textContent = '+'
  incrementButton.className = 'increment'

  priceQuantityContainer.appendChild(quantity)
  priceQuantityContainer.appendChild(price)

  // Lógica para controlar a quantidade
  data.EventArgsList.push([quantityInput, data, decrementButton, price])
  incrementButton.addEventListener('click', () => {
    const argsList = data.EventArgsList
    for (const index in argsList) {
      const args = argsList[index]
      incrementEvent(...args)
    }
  })

  decrementButton.addEventListener('click', () => {
    const argsList = data.EventArgsList
    for (const index in argsList) {
      const args = argsList[index]
      decrementEvent(...args)
    }
  })

  // Validação ao perder o foco
  quantityInput.addEventListener('blur', () => {
    let currentValue = parseInt(quantityInput.value)

    // Ajusta para múltiplos de base_de_calculo
    if (currentValue % data.base_de_calculo !== 0) {
      currentValue =
        Math.floor(currentValue / data.base_de_calculo) * data.base_de_calculo
    }

    // Garante que o valor não seja menor que a quantidade mínima
    if (currentValue < data.quantidade_minima) {
      currentValue = data.quantidade_minima // Define para a quantidade mínima
    }

    quantityInput.value = currentValue
    decrementButton.disabled = quantityInput.value == 0
  })

  quantity.appendChild(decrementButton)
  quantity.appendChild(quantityInput)
  quantity.appendChild(incrementButton)

  div.appendChild(img)
  div.appendChild(textContainer)
  div.appendChild(priceQuantityContainer)

  console.log(data.incrementEventArgsList)
  return div
}

function showProducts(categoryId, produtos) {
  const containers = {
    1: document.getElementById('tortas-salgadas-container'),
    2: document.getElementById('mini-delicias-container'),
    3: document.getElementById('doces-tradicionais-container'),
    4: document.getElementById('doces-especiais-container'),
    5: document.getElementById('salgados-assados-container'),
    6: document.getElementById('salgados-tradicionais-container'),
    7: document.getElementById('salgados-especiais-container'),
  }

  const container = containers[categoryId]
  if (container) {
    container.style.display = 'flex'
    produtos
      .filter((product) => product.categoria_id === categoryId)
      .forEach((product) => {
        const productDiv = createDivFromProduct(product)
        container.appendChild(productDiv)
      })
  }
}
