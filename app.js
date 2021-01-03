// w authController auktualij wszystko co wiąże sie z avatarem !!


const express=require('express')
const app=express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')



const errorMiddleware = require('./middlewares/errors')
const dotenv = require('dotenv')



app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(fileUpload());



// ustawienie config file
dotenv.config({ path: '../backend/config/config.env' })


// importuję wszystkie route
const products=require('./routes/product')
const auth=require('./routes/auth')
const payment = require('./routes/payment');

const order=require('./routes/order')

app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', payment)
app.use('/api/v1', order)

// Middleware do używania errorów
app.use(errorMiddleware)

module.exports=app