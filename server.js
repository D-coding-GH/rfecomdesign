const express = require('express')
const mysql = require('mysql')
const dotenv = require('dotenv')
const cors = require('cors')
const axios = require('axios')


dotenv.config({path:'./.env'})


const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json({extended: false}));
app.use(cors())

dotenv.config({path:'./.env'})


const db = mysql.createConnection({
    host: process.env.DATA_HOST,
    user: process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    port: 3307, 
    database: process.env.DATABASE

});

db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('hello mysql..CONNECTED')
    }
})
  

app.get('/', ( req, res) => {
    res.send("hello from nodejs")
    console.log("hello from node")
})

app.post('/createUser', (req,res) => {

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    console.log( 'reqs', req.body.name)
    console.log( req.body.email)
    console.log( req.body.password)

    db.query(
    
    'INSERT INTO users (name,email,password) VALUES (?)',


    { name, email, password }, async (error, results) => {
        console.log(results)
        
        if (error) {
            console.log(error)
            res.send("theres an error")
        } else {
            console.log('result')
           
        }
    })
    
})



app.listen(5000,() =>{
    console.log('Server started on port 5000')
})