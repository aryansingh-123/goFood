const express = require('express')
const app = express()
const port = 5000
const connectDB = require('./db');
connectDB();

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next();

})
app.use(express.json() );

app.get('/', (req, res) =>{
    res.send('Hey Welcome to backend')
})
app.use('/api', require("./Routes/CreateUser"));
app.listen(port, () =>{
    console.log(`app is listening on port ${port}`)
})

//To run backend use cmd npm  run dev
// If Nodemon is not working then add these Lines in Package.js in Scriprt
//"start" : "node index.js",
//"dev" : "nodemon index.js"