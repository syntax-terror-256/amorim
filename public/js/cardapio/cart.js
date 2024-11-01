// TODO: adicionar opção de remover item
// TODO: configurar event listener de 'quantityInput'
class CartManager {
  // adiciona um item do objeto carrinho ao elemento html do carrinho
  static #createCartItem(itemCarrinho, produtos) {
    // pega o produto atual
    var item
    for (const index in produtos) {
      if (produtos[index].produto_id === itemCarrinho.product_id) {
        item = produtos[index]
        break
      }
    }

    // cria o div do item do carrinho
    const itemDiv = document.createElement('div')
    itemDiv.className = 'cart-item'

    // cria imagem do item
    const itemImg = document.createElement('img')
    itemImg.src = item.imagem

    // cria nome do item
    const itemName = document.createElement('h2')
    itemName.textContent = item.nome

    // cria controle de quantidade
    const productDivQuantityControl = document
      .getElementById(`produto-id-${item.produto_id}`)
      .getElementsByClassName('price-quantity-container')[0]
    const quantityControl = productDivQuantityControl.cloneNode(true)
    const incrementButton =
      quantityControl.getElementsByClassName('increment')[0]
    const decrementButton =
      quantityControl.getElementsByClassName('decrement')[0]
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

    const itemBody = document.createElement('div')
    itemBody.className = 'cart-item-body'
    itemBody.appendChild(itemName)
    itemBody.appendChild(quantityControl)

    // coloca todos os elementos no div do item e junta ao elemento do carrinho
    itemDiv.appendChild(itemImg)
    itemDiv.appendChild(itemBody)
    this.cartDiv.appendChild(itemDiv)
  }

  // atualiza o elemento do carrinho de compras
  static #updateCart(carrinho, produtos) {
    this.cartDiv.innerHTML = ''

    for (const index in carrinho) {
      this.#createCartItem(carrinho[index], produtos)
    }

    if (!this.cartDiv.innerHTML) {
      const emptyCartWarning = document.createElement('div')
      emptyCartWarning.textContent = 'O carrinho está vazio'
      emptyCartWarning.className = 'empty-cart-warning'

      this.cartDiv.appendChild(emptyCartWarning)
    } else {
      const checkoutButton = document.createElement('button')
      checkoutButton.className = 'fixed-button'
      const buttonIcon = document.createElement('img')
      buttonIcon.src = 'images/whatsapp.svg'
      checkoutButton.appendChild(buttonIcon)
      this.cartDiv.appendChild(checkoutButton)
    }
  }

  // atualiza o elemento do carrinho de compras a cada x ms, caso necessário
  static async startCartUpdateListener(ms) {
    this.updateCartFlag = true // true quando o carrinho deve ser atualizado
    this.cartDiv = document.getElementsByClassName('carrinho')[0]
    while (true) {
      if (this.updateCartFlag) {
        this.updateCartFlag = false
        this.#updateCart(carrinho, produtos)
      }
      await new Promise((resolve) => setTimeout(resolve, ms))
    }
  }
}
