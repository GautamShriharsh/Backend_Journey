require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.get('/twitter', (req,res) => {
    res.send('xdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at the website</h1>')
})

app.get('/youtube', (req,res) => {
  res.send('<h2>Coding and learning Express</h2>')
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})