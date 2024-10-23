var showProducts // função declarada em product-from-div.js
var createCartItem // função declarada em cart.js
var setupProducts // função declarada em setup-products.js

// var categorias
var produtos
var carrinho

async function fetchData() {
  try {
    // const categoriasResponse = await fetch('/database/CategoriasComuns')
    // categorias = await categoriasResponse.json()

    const produtosResponse = await fetch('/database/ProdutosComuns')
    produtos = await produtosResponse.json()

    // prepara os objetos na lista de produtos para serem utilizados pelas funções do carrinho e cardápio
    setupProducts(produtos)

    const cartResponse = await fetch('/cart')
    carrinho = await cartResponse.json()
    carrinho = carrinho.cart
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

fetchData().then(() => {
  showProducts(1, produtos, carrinho)
  showProducts(2, produtos, carrinho)
  showProducts(3, produtos, carrinho)
  showProducts(4, produtos, carrinho)
  showProducts(5, produtos, carrinho)
  showProducts(6, produtos, carrinho)
  showProducts(7, produtos, carrinho)

  for (const index in carrinho) {
    createCartItem(carrinho[index], produtos)
  }
})

const showSalgadosBtn = document.getElementById('show-salgados')
const showDocesBtn = document.getElementById('show-doces')
const showOutrosBtn = document.getElementById('show-outros')

showSalgadosBtn.addEventListener('click', () => {
  document.querySelectorAll('.container-categoria').forEach((element) => {
    if (element.id != 'salgados') {
      element.style.display = 'none'
    } else {
      element.style.display = ''
    }
  })
})

showDocesBtn.addEventListener('click', () => {
  document.querySelectorAll('.container-categoria').forEach((element) => {
    if (element.id != 'doces') {
      element.style.display = 'none'
    } else {
      element.style.display = ''
    }
  })
})

showOutrosBtn.addEventListener('click', () => {
  document.querySelectorAll('.container-categoria').forEach((element) => {
    if (element.id != 'outros') {
      element.style.display = 'none'
    } else {
      element.style.display = ''
    }
  })
})
