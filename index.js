const express = require('express')
const app = express()
const port =   3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/twitter',(req,res)=>{
    res.send("KumarSunny")
})
app.get('/login',(req,res)=>{
    res.send("login successfull")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})