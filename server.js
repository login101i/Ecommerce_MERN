const app=require('./app')
const connectDatabase=require('./config/database')


const dotenv=require('dotenv')
// ustawienie config file
dotenv.config({path:'../backend/config/config.env'})

// połaczenie z basą canych
connectDatabase()



app.listen(process.env.PORT, ()=>{
    console.log(`Serwer działa na porcie --------------  ${process.env.PORT} i proces ________ ${process.env.NODE_ENV} mode`)
})