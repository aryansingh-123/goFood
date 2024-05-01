const express = require('express')
const app = express()
const port = 4000
const connectDB = require('./db');
connectDB();

app.get('/', (req, res) =>{
    res.send('Hey Welcome to backend')
})

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`)
})

//To run backend use cmd npm  run dev
// If Nodemon is not working then add these Lines in Package.js in Scriprt
//"start" : "node index.js",
//"dev" : "nodemon index.js"