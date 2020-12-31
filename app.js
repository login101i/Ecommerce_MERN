const express=require('express')
const app=express()
const cookieParser = require('cookie-parser')


const errorMiddleware = require('./middlewares/errors')


app.use(express.json())
app.use(cookieParser())



// importuję wszystkie route
const products=require('./routes/product')
const auth=require('./routes/auth')

app.use('/api/v1', products)
app.use('/api/v1', auth)

// Middleware do używania errorów
app.use(errorMiddleware)

module.exports=app