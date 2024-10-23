const cartDiv = document.getElementsByClassName('carrinho')[0]

// TODO: atualizar elemento do carrinho sempre que um novo item for adicionado
// TODO: adicionar opção de remover item
// TODO: configurar event listener de 'quantityInput'
function createCartItem(itemCarrinho, produtos) {
  // pega o produto atual
  var item
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

  // salva os parâmetros para atualização do controle de quantidade no atributo 'EventArgsList' to objeto
  item.EventArgsList.push([quantityInput, item, decrementButton, price])

  // configura botões de controle de quantidade
  incrementButton.addEventListener('click', () => {
    item.incrementAll()
  })
  decrementButton.addEventListener('click', () => {
    item.decrementAll()
  })

  // coloca todos os elementos no div do item e junta ao elemento do carrinho
  itemDiv.appendChild(itemImg)
  itemDiv.appendChild(itemName)
  itemDiv.appendChild(quantityControl)
  cartDiv.appendChild(itemDiv)
}
