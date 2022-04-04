const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  username: String,
  title: String,
  body: String,
  replies:[
    {username: String,
    body: String}
  ],
})
const Post = mongoose.model('posts', postSchema)

module.exports = Post
