const { produtoRepositorio } = require('../repositorios/produto')
const repositorio = produtoRepositorio()

const Router = require('express').Router()

Router.get('/produto/:id', (req, res) => {
    const {id} = req.params

    const produto = repositorio.get(id)

    res.send(produto)
})

Router.post('/produtos', (req, res) => {
    try{
        const produto = req.params

        //Infelizmente não lembro.
        //Sei que tinha que pegar os parâmetros e usar o Json.Parse para criar o objeto.
    
        const novoProduto = JSON.parse(produto)
    
        res._construct(novoProduto)

    }catch{
         const erro = JSON.stringify({
            erro: 404,
            msg: 'Dados inconpletos ou não preenchidos!'
         })
        
    }
    
    
})

Router.delete('/produto/:id', (req, res) => {
    const {id} = req.params

    const produto = repositorio.delete(id)

    res.destroy(produto)
})

module.exports = Router