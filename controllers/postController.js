const express= require('express')
const posts = express.Router()
const Posts = require('../models/postSchema.js')

posts.get('/', (req,res)=>{
  Posts.find({}, (error, foundPosts)=>{
    res.json(foundPosts)
  })
})

posts.delete('/:_id', (req,res)=> {
  Posts.findByIdAndRemove(req.params._id, (error, deletedPost)=>{
    res.json(deletedPost)
  })
})
posts.put('/:_id', (req,res)=>{
  Posts.findByIdAndUpdate(req.params._id, req.body, {new:true}, (error, updatedPost)=> {
    res.json(updatedPost)
  })
})
posts.post('/', (req,res)=>{
  Posts.create(req.body, (error, createdPost)=>{
    res.json(createdPost)
  })
})
posts.patch('/', (req,res)=>{
  Posts.push(req.body, (error, pushedPost)=> {
    res.json(pushedPost)
  })
})
module.exports = posts
