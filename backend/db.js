const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://ayran582002:Aryan123@gofood.r9etesr.mongodb.net/goFoodMERN?retryWrites=true&w=majority&appName=goFood'
const connectDB = async () => {
    try {
      mongoose.set('strictQuery', true);
      await mongoose.connect(mongoURI, { useNewUrlParser: true });
      console.log("Connected");
  
      // Fetch data after successful connection
      const fetched_data = await mongoose.connection.db.collection("foodItems");
      const data = await fetched_data.find({}).toArray(); // Use await for promise resolution
      console.log();
    } catch (err) {
      console.error("Error connecting to MongoDB", err);
    }
  };
  
module.exports = connectDB;
