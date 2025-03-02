require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Suniyaa')
})
app.get('/about', (request,respone)=>{
    respone.send('About page')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})