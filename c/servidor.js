const express = require('express')
const app = express()


app.use(express.urlencoded({extended: true}))

app.post('/usuarios',(req, resp)=>{
    console.log(req.body)
    resp.send('<h1> Parabens, seu cadastro foi efetuado </h1>')
})

app.listen(3003)