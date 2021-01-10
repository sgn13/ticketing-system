const express = require('express')
const router = express.Router()
const authController = require('../../controller/authController')

//Query Model
const Query = require('../../models/queModel')


router.post('/', authController.protect, (req, res) => {
    const newQuery = new Query({
        query: req.body.query,
        ellaborate: req.body.ellaborate
    });
    //const {query,ellaborate} = req.body;
    newQuery.save().then(Query => res.json(Query));

    console.log(req.body)
});

router.get('/', authController.protect, (req, res) => {
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