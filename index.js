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
        body: 'This is a cool blog post.'
    })
    const post1 = new BlogPost({
        title: 'SEI 1019',
        body: 'Software engineers are cool.'
    })
    post1.save()
    res.send('Post completed')
})

app.get('/comment', (req, res) => {
    // Create post
    const post2 = new BlogPost({
        title: 'Cool post',
        body: 'Let us make cool things.'
    })
    // Create comment
    const myComment = {
        header: 'Cool!',
        content: 'This is a cool post.'
    }
    // Add comment to post
    post2.comments.push(myComment)
    // Save post to database
    post2.save()
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})