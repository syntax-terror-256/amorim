// gets the values from the databse and stores the on a global variable
const categorias = await fetch('/database/CategoriasComuns')
.then(response => {
    return response.json()
})

const produtos = await fetch('/database/ProdutosComuns')
.then(response => {
    return response.json()
})

window.categorias = categorias
window.produtos = produtos