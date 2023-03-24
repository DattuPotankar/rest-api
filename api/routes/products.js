const express = require('express')
const Product = require('../model/product')
const router = express.Router()
const mongoose = require('mongoose')
const productController = require("../controller/product.model")

//Handle GET request for products
router.get('/', productController.getProducts)
//  (req, res) => {
//     res.status(200).json({
//         msg: "This is a GET request for products"
//     })
// })

//Handle POST request for product
router.post('/',productController.createProduct)
//  (req, res) => {

//     //body parsel will make the following properties available
//     //    console.log(req.body)
//     //    console.log(req.body.name)
//     //    console.log(req.body.price)

//     // 1. create an object of the model
//     const product = new Product({
//         _id: new mongoose.Types.ObjectId(),
//         name: req.body.name,
//         price: req.body.price
//     })

//     // 2. save this to the database
//     product.save()
//         .then((res) => {
//             console.log(res)
//         })
//         .catch((err) => {
//             console.log(err)
//         })

//     res.status(200).json({
//         msg: "This is a post request for products",
//         statusMsg: "Producted created sucessfully",
//         product: product
//     })
// })

//Handle GET request for a single product
router.get('/:productId', productController.getProductByID)
// (req, res) => {

//     const id = req.params.productId

//     if (id == "7") {
//         res.status(200).json({
//             msg: "congrats! You have a special id with good cashback"
//         })
//     } else {
//         res.status(200).json({
//             msg: "Oops! You have a regular id with no cashback"

//         })
//     }

// })
//Handle PUT request for product
router.put('/:productId', productController.updateProduct)
// (req, res) => {
//     const id = req.params.productId
//     res.status(200).json({
//         msg: "This is a put request for product",
//         id: id
//     })
// })
//Handle DELETE request for product
router.delete('/:productId', productController.DeleteProduct)
//  (req, res) => {
//     const id = req.params.productId
//     res.status(200).json({
//         msg: "This is a delete request for product",
//         id: id
//     })
// })

module.exports = router