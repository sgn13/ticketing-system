const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
const ansController = require('../../controller/ansController')

const Answer = require('../../models/ansModels')

 router.post('/:id',async (req,res) =>{
     const queryid = req.params.id;
     console.log(queryid);
     const answer= await Answer.create({
         answer: req.body.answer,
         queryid
     });
     res.json(answer)
 })

//router.post('/', ansController.submitAnswer)

module.exports = router