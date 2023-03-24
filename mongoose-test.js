const mongoose = require('mongoose')


const uri = "mongodb+srv://dattupotankar:Dattu%4086000@cluster0.3tj2wke.mongodb.net/school"
mongoose.connect(uri)
.then(()=>{
    console.log("connection established succesfully")
})