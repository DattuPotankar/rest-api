const mongoose = require('mongoose')
const Product = require('../model/product')

// R from CRUD [GET All]
exports.getProducts = async (req,res) =>{
    try {
        const products = await Product.find(); // Get all the documents from the collection 
        res.status(200).json({
            msg: "All documents fetch succesfully",
           data : products
        })
    } catch (err) {
        res.status(501).json({
            code:10,
            msg:"Something went wrong",
            err: err
        })
    }
}
 
// R from CRUD [GET Single]
exports.getProductByID = async (req,res) =>{
    try {
        const product = await Product.findById(req.params.productId); // Get single documents from the collection 
          let m = ""
        if(product === null){
            m = "No matching document found"
        } else {
            m = "Document fetch succesfully"
        }
        res.status(200).json({
            msg: m,
           data : product
        })
    } catch (err) {
        res.status(501).json({
            code:10,
            msg:"Something went wrong",
            err: err
        })
    }
}

// C from CRUD [Add or post]
exports.createProduct = async (req ,res) =>{
    try {
        //create a product object
        const product = new Product({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
        })
        const data = await product.save(); // call the save method and wait for it to return
        // if it reaches this point ,means save() was succesfull
        res.status(200).json({
            msg: "Product created succesfully",
            product: data
        })
        
    } catch (err) {
        res.status(501).json({
            code:10,
            msg:"Something went wrong",
            err: err
        })
    }
}

// u from CRUD [put]
exports.updateProduct = async (req ,res) =>{
    try {
        const data = await Product.findByIdAndUpdate(req.params.productId, req.body); 
        res.status(200).json({
            msg: "Product updated succesfully",
            product: data
        })
        
    } catch (err) {
        res.status(501).json({
            code:10,
            msg:"Something went wrong",
            err: err
        })
    }
}
// D from CRUD [DELETE]
exports.DeleteProduct = async (req ,res) =>{
    try {
        const data = await Product.findByIdAndDelete(req.params.productId, req.body); 
        res.status(200).json({
            msg: "Product Deleted succesfully",
            product: data
        })
        
    } catch (err) {
        res.status(501).json({
            code:10,
            msg:"Something went wrong",
            err: err
        })
    }
}
