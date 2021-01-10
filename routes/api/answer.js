const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
const ansController = require('../../controller/ansController');
const { collection } = require('../../models/ansModels');
const Query = require('../../models/queModel');
const Answer = require('../../models/ansModels');
const app = require('./userRouter');

 router.post('/:id',async (req,res) =>{
     const queryid = req.params.id;
     const filter = {_id:req.params.id}
     const update = {is_answered:true}
     console.log(queryid);
     const query = await Query.findOneAndUpdate(filter,update,{
        new:true
     }
     )
     //console.log(query);
     const answer= await Answer.create({
         answer: req.body.answer,
         queryid
     });
     res.json(answer)
 })

 router.get("/:id", async (req, res) => 
 {
    try{
    const answer = await Answer.findOne({ "queryid":  req.params.id });
        console.log(answer);
        res.json(answer);
    }
    catch(err){
        return res.status(500).json('error');
    }
}
)



//router.post('/', ansController.submitAnswer)

module.exports = router