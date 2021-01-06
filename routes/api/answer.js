const express = require('express');
const { Query } = require('mongoose');
const router = express.Router()

const Answer = require('../../models/ansModels')

router.post('/',(req,res)=>{
    const newAnswer = new Answer({
        answer: req.body.answer
    });

    newAnswer.save().then(Answer=>res.json(Answer));
})

router.get('/',(req,res)=>{
    Answer.find()
    .then(Answer => res.json(Answer))
})

module.exports = router