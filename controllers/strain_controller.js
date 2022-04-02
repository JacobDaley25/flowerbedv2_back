const express=require('express')
const strain = express.Router()
const Strains = require('../models/strainSchema')

strain.get('/', (req,res)=> {
  Strains.find({}, (error, foundStrains)=>{
    res.json(foundStrains)
  })
})

strain.put('/:_id', (req,res)=>{
  Strains.findByIdAndUpdate(req.params._id, req.body, {new:true}, (error, updatedStrain)=> {
    res.json(updatedStrain)
  })
})
strain.post('/', (req,res)=>{
  Strains.create(req.body, (error, createdStrain)=>{
    res.json(createdStrain)
  })
})

module.exports = strain
