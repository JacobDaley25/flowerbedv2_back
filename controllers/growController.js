const express=require('express')
const grow = express.Router()
const Grows = require('../models/growSchema')

grow.get('/', (req,res)=> {
  Grows.find({}, (error,foundGrows)=>{
    res.json(foundGrows)
  })
})

grow.put('/:_id', (req,res)=>{
  Grows.findByIdAndUpdate(req.params._id, req.body, {new:true}, (error, updatedGrow)=> {
    res.json(updatedGrow)
  })
})
grow.post('/', (req,res)=> {
  Grows.create(req.body, (error,createdGrow)=>{
    res.json(createdGrow)
  })
})

module.exports = grows
