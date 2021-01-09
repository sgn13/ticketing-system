const express = require('express')
const router = express.Router()
//Query Model
const Query = require('../../models/queModel')
const authController = require('../../controller/authController')
const queController = require('../../controller/queController');

router.get('/', queController.getAllQuery)

router.post('/:id',authController.protect, (req,res)=>{
    const user_id = req.params.id;
    const newQuery = new Query({
        query: req.body.query,
        ellaborate: req.body.ellaborate,
        user_id
        
    });
    //const {query,ellaborate} = req.body;
   newQuery.save().then(Query=>res.json(Query)); 
});

router.get('/:id',authController.protect, async (req,res)=>{
    try{
        const queries = await Query.find({user_id: req.params.id});
        //.sort({ date:-1})
        res.status(200).json({
            status: "success",
            data: queries
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
})


router.delete('/:id',(req,res)=>{
    Query.findById(req.params.id)
        .then(Query => Query.remove().then(() => res.json({success :true})))
        .catch(err => res.status(404).json({ success:false}))
})


module.exports = router 