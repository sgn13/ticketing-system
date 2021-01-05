const express = require('express')
const router = express.Router()
//Query Model
const User = require('../../models/queModel')

router.post('/',(req,res)=>{
    const newQuery = new Query({
        query: req.body.query,
        ellaborate: req.body.ellaborate
    });
   newQuery.save().then(item=>res.json(item)); 
//const {query,ellaborate} = req.body;
console.log(req.body)
});

router.get('/',(req,res)=>{
    Query.find()
    .sort({ date:-1})
    .then(items => res.json(items))

});

router.delete('/:id',(req,res)=>{
    Query.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success :true})))
        .catch(err => res.status(404).json({ success:false}))
})
module.exports = router 