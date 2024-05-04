const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://ayran582002:Aryan@123@gofood.r9etesr.mongodb.net/?retryWrites=true&w=majority&appName=goFood'
const connectDB =async() =>{
    mongoose.set('strictQuery', true);
    mongoose.connect(mongoURI,{ useNewUrlParser: true },(err, result)=>{
        if(err) console.log("Error in conneting with mongoDb",err)
        else{
        console.log("Connected");
    }
    });
}
module.exports = connectDB;
