require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const db = require('./models/blog.js')

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Home Route, Backend')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})