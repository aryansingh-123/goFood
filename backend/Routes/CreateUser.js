const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.post("/createuser", async (req, res)=>{
    try {
        await User.create({
            name:"Aryan Singh",
            password:"123456",
            email:"aksinhg2545@gmail.com",
            location:"qwert ed"
        })
    res.json({success:true})
    } catch (error) {
        console.log(error)
        res.json({success:false})
        
    }
})

module.exports = router;