const Query = require("../models/queModel");

exports.gettrue =  async (req,res)=>{
    try{
        const queries = await Query.find({is_answered: true});
        console.log(queries)
        //.sort({ date:-1})
        res.status(200).json({
            status: "true",
            data: queries
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.getfalse =  async (req,res)=>{
    try{
        const queries = await Query.find({is_answered: false});
        console.log(queries)
        //.sort({ date:-1})
        res.status(200).json({
            status: "false",
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