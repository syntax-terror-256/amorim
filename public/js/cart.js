var incrementEvent
var decrementEvent

const cartDiv = document.getElementsByClassName('carrinho')[0]

function createCartItem(itemCarrinho, produtos) {
  // pega o produto atual
  var item = null
  for (const index in produtos) {
    console.log(produtos[index].produto_id, itemCarrinho)

    if (produtos[index].produto_id === itemCarrinho.product_id) {
      item = produtos[index]
      break
    }
  }

  // cria o div do item do carrinho
  const itemDiv = document.createElement('div')
  itemDiv.className = 'cart-item'

  // cria nome do item
  const itemName = document.createElement('text')
  itemName.textContent = item.nome

  // cria imagem do item
  const itemImg = document.createElement('img')
  itemImg.src = item.imagem

  // cria controle de quantidade
  const productDivQuantityControl = document
    .getElementById(`produto-id-${item.produto_id}`)
    .getElementsByClassName('price-quantity-container')[0]
  const quantityControl = productDivQuantityControl.cloneNode(true)
  const incrementButton = quantityControl.getElementsByClassName('increment')[0]
  const decrementButton = quantityControl.getElementsByClassName('decrement')[0]
  const quantityInput =
    quantityControl.getElementsByClassName('quantity-input')[0]
  const price = quantityControl.getElementsByClassName('price')[0]

  // configura botões de controle de quantidade
  item.EventArgsList.push([quantityInput, item, decrementButton, price])
  incrementButton.addEventListener('click', () => {
    const argsList = item.EventArgsList
    for (const index in argsList) {
      const args = argsList[index]
      incrementEvent(...args)
    }
  })
  decrementButton.addEventListener('click', () => {
    const argsList = item.EventArgsList
    for (const index in argsList) {
      const args = argsList[index]
      decrementEvent(...args)
    }
  })

  // coloca todos os elementos no div do item e junta ao elemento do carrinho
  itemDiv.appendChild(itemImg)
  itemDiv.appendChild(itemName)
  itemDiv.appendChild(quantityControl)
  cartDiv.appendChild(itemDiv)
}
