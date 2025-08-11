require('dotenv').config()
const express = require('express');
const app = express();


const port = 4000

app.get('/', (req, res) => {
  res.send('Hello fucking world!')
})

app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h2>please login</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
