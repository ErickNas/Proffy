// Servidor
const express = require('express')
const server = express()
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')
const nunjucks = require('nunjucks')

// Configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Configurar arquivos estáticos (css, scripts, images)
server.use(express.urlencoded({ extended: true }))
.use(express.static("public"))
// Rotas da Aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)

// npm run dev para iniciar a aplicação