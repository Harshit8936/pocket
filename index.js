const express = require('express');
const app = express();
const port = 3000;

//  creating HTTP node js server

app.get('/',(req,res)=>{
        res.status(200).send('Hello, World!')
})

app.listen(port,()=>{
        console.log(`App is listenng on ${port}`);
})



