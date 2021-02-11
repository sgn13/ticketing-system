const Role = require("../models/roleModel");
exports.role = async (req, res) => {
  try {
    // const roless=[req.body.role]
    const roles = await Role.insertMany({
      role: req.body.role,
    });
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.getrole = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
    console.log(roles);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.deleterole = async (req, res) => {
  try {
    console.log("delete");
    const roles = await Role.findOneAndDelete({ role: req.body.role });
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json(err);
  }
};
