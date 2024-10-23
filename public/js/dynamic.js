var showProducts // função declarada em product-from-div.js
var createCartItem // função declarada em cart.js

// var categorias
var produtos
var carrinho

async function fetchData() {
  try {
    // const categoriasResponse = await fetch('/database/CategoriasComuns')
    // categorias = await categoriasResponse.json()

    const produtosResponse = await fetch('/database/ProdutosComuns')
    produtos = await produtosResponse.json()

    const cartResponse = await fetch('/cart')
    carrinho = await cartResponse.json()
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

fetchData().then(() => {
  showProducts(1, produtos)
  showProducts(2, produtos)
  showProducts(3, produtos)
  showProducts(4, produtos)
  showProducts(5, produtos)
  showProducts(6, produtos)
  showProducts(7, produtos)

  for (const index in carrinho.cart) {
    createCartItem(carrinho.cart[index], produtos)
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
