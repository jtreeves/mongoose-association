require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const BlogPost = require('./models/blog.js')

mongoose.connect('mongodb://localhost/mongooseAssociation')

const db = mongoose.connection

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Home Route, Backend')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})