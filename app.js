const express=require('express')
const app=express()

const errorMiddleware = require('./middlewares/errors')


app.use(express.json())


// importuję wszystkie route
const products=require('./routes/product')

app.use('/api/v1', products)

// Middleware do używania errorów
app.use(errorMiddleware)

module.exports=app