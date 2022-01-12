const express = require('Express');
const app = express();
const port = 2900;
const body = require('body-parser');
const cors = require('cors');
const fs = require('fs');

app.listen(port,()=> console.log(`server is running on ${port}`));

app.get('/getData',(req,res)=>{
    fs.readFile('../assets/travels.json',(err,data)=>{
        res.json(JSON.parse(data).travels);
    })
})

