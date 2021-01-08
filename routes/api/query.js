const express = require('express')
const router = express.Router()
const authController = require('../../controller/authController')

//Query Model
const Query = require('../../models/queModel')
const authController = require('../../controller/authController')

<<<<<<< HEAD
router.post('/', authController.protect, (req,res)=>{
=======
router.post('/', authController.protect, (req, res) => {
>>>>>>> c073d820275bbeb1511157e4ffa79bfd9b2499ad
    const newQuery = new Query({
        query: req.body.query,
        ellaborate: req.body.ellaborate
    });
    //const {query,ellaborate} = req.body;
    newQuery.save().then(Query => res.json(Query));

    console.log(req.body)
});

<<<<<<< HEAD
router.get('/', authController.protect, (req,res)=>{
=======
router.get('/', authController.protect, (req, res) => {
>>>>>>> c073d820275bbeb1511157e4ffa79bfd9b2499ad
    Query.find()
        //.sort({ date:-1})
        .then(Query => res.json(Query))

});

router.delete('/:id', (req, res) => {
    Query.findById(req.params.id)
        .then(Query => Query.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router 