const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  username: String,
  body: String,
  replies:[],
})
const Post = mongoose.model('posts', postSchema)

module.exports = Post
