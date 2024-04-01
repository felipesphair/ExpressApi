const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProdutoPorId(id) {
    return produtos[id] || {msg:'Produto não encontrado'}
}

function  getTodosProdutos(){
   return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {
    salvarProduto,
    getProdutoPorId,
    getTodosProdutos,
    excluirProduto
}