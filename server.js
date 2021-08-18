const express = require('express')
const mysql = require('mysql')
const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    port: 3307, 
    database: 'runfreedb',

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





app.listen(5000,() =>{
    console.log('Server started on port 5000')
})