const express = require ('express')
const app = express()

const db = require('./src/data/database')

db.connect()
 app.use(express.json())

 const moviesRouter = require('./src/routes/movies.routes')

 app.use('/movies', moviesRouter)

 app.listen(9191, ()=> console.log(' servidor rodando na porta 9191'))