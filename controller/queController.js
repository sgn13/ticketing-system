const Query = require("../models/queModel");

exports.getQuery = async (req,res)=>{
    try{
        const queries = await Query.find({user_id: req.user.user_id});
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

}
exports.getAllQuery = async (req,res)=>{
    try{
        const queries = await Query.find();
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

}
// exports.getAllQuery = async (req,res) =>{
//     const queries = await Query.find();
//     res.json({
//         data : queries
//     })
// }