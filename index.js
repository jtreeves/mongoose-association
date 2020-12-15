require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const BlogPost = require('./models/blog.js')

mongoose.connect('mongodb://localhost/mongooseAssociation')

const db = mongoose.connection

db.once('open', () => {
    console.log(`Connected to MongoDB on ${db.host}: ${db.port}`)
})

db.on('error', (err) => {
    console.log(`Error: ${err}`)
})

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Home Route, Backend')
})

app.get('/blog', (req, res) => {
    BlogPost.create({
        title: 'Mongoose for all Mongoose',
        body: 'This is a cool blog post'
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})