const express = require('express')
const router = express.Router()
//Query Model
const Query = require('../../models/queModel')
const authController = require('../../controller/authController')

router.post('/', authController.protect, (req,res)=>{
    const newQuery = new Query({
        query: req.body.query,
        ellaborate: req.body.ellaborate
    });
    //const {query,ellaborate} = req.body;
   newQuery.save().then(Query=>res.json(Query)); 

console.log(req.body)
});

router.get('/', authController.protect, (req,res)=>{
    Query.find()
    //.sort({ date:-1})
    .then(Query => res.json(Query))

});

router.delete('/:id',(req,res)=>{
    Query.findById(req.params.id)
        .then(Query => Query.remove().then(() => res.json({success :true})))
        .catch(err => res.status(404).json({ success:false}))
})

//router.post("/answer/:id", (req,res)=>console.log(req.params));

module.exports = router 