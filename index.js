const express =require('express');
const port = process.env.PORT || 1420


const app=express()

app.get('/',(req,res)=>{
    res.send('<h1>Welcome</h1>')
})

app.get('/hello',(req,res)=>{
    res.send('<h1>hello</h1>')
})

app.listen(port,()=>{
    console.log('**** Application is running',port);
})
