const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('I know how to start node...YAY')
});

app.listen(4200,()=>console.log('Listening to port 4200'));

