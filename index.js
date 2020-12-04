const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('i know how to open node yay.....')
})
app.listen(4200,()=>console.log('num node successfully'))