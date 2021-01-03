const app=require('./app')
const connectDatabase=require('./config/database')


const dotenv=require('dotenv')
const cloudinary = require('cloudinary')



// Handle Uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down server bo pojawił się w app.js uncaught exception');
    process.exit(1)
})

// ustawienie config file
dotenv.config({path:'../backend/config/config.env'})

// połaczenie z basą canych
connectDatabase()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    apic_secret: process.env.CLOUDINARY_API_SECRET
})




const server=app.listen(process.env.PORT, ()=>{
    console.log(`Serwer działa na porcie --------------  ${process.env.PORT} i proces ________ ${process.env.NODE_ENV} mode`)
})


// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Wyłączono server bo jest unhandled promise rejections');
    server.close(() => {
        process.exit(1)
        // cg czemu 1 to nie wiem
    })
})