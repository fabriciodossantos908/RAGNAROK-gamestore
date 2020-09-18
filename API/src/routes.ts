import express from 'express'

const routes = express.Router();

routes.get('/', () => {
    const teste = 'teste'
    return teste
})

export default routes;