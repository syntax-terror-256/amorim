// prepara os objetos na lista de produtos para serem utilizados pelas funções do carrinho e cardápio
function setupProducts(products) {
  for (const index in products) {
    // inicializa uma lista de argumentos para as funções de atualizar
    // quantidade de itens nos elementos de controle de quantidade.
    // é usado para permitir que a quantidade seja atualizada tanto no
    // cardápio quanto no carrinho.
    products[index].EventArgsList = []

    products[index].base_de_calculo = 1 // atributo obsoleto ainda usado em algumas funções

    // método que incrementa a quantidade exibida no controle de quantidade
    // é usado como event listener nos botões de incremento do cardápio e do carrinho
    products[index].incrementEvent = function (
      quantityInput,
      data,
      decrementButton,
      price
    ) {
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
      return [data.produto_id, newValue]
    }

    // método que decrementa a quantidade exibida no controle de quantidade
    // é usado como event listener nos botões de decremento do cardápio e do carrinho
    products[index].decrementEvent = function (
      quantityInput,
      data,
      decrementButton,
      price
    ) {
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
      return [data.produto_id, newValue]
    }

    // chama o método de incremento para cada grupo de argumentos no atributo 'EventArgsList'.
    // esse é o método realmente utilizado como event listener no carrinho e cardápio, já que permite
    // que os dois sejam atualizados ao mesmo tempo quanto qualquer um deles for pressionado.
    products[index].incrementAll = function () {
      const argsList = this.EventArgsList
      var id
      var value
      for (const index in argsList) {
        const args = argsList[index]
        let changes = this.incrementEvent(...args)
        id = changes[0]
        value = changes[1]
      }
      fetch('cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: `{"product_id": ${id}, "quantity": ${value}}`,
      }).then((response) => {
        response.json().then((jsonResponse) => {
          carrinho = jsonResponse.cart
          CartManager.updateCartFlag = true
        })
      })
    }

    // chama o método de decremento para cada grupo de argumentos no atributo 'EventArgsList'.
    // esse é um dos métodos realmente utilizado como event listener no carrinho e cardápio, já que permite
    // que os dois sejam atualizados ao mesmo tempo quanto qualquer um deles for pressionado.
    products[index].decrementAll = function () {
      const argsList = this.EventArgsList
      var id
      var value
      for (const index in argsList) {
        const args = argsList[index]
        let changes = this.decrementEvent(...args)
        id = changes[0]
        value = changes[1]
      }
      fetch('cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: `{"product_id": ${id}, "quantity": ${value}}`,
      }).then((response) => {
        response.json().then((jsonResponse) => {
          carrinho = jsonResponse.cart
          CartManager.updateCartFlag = true
        })
      })
    }
  }
}
