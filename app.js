const express = require('express')
const app = express();
const productsRouter = require('./api/routes/products')
const morgan = require('morgan')
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
// app.use((req,res)=>{
//     res.status(200).json({
//         msg:"This is a simple GET request"
//     })
// })

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json({extended: true}))

app.use(morgan("dev"))

mongoose.connect(process.env.mongoConnection)

app.use('/products', productsRouter)


module.exports = app