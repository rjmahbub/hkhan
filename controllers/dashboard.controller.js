const UserModel = require('../models/users.model');

exports.MealStatus = async (req, res) => {
  console.log(req.headers)
  return;
  const { authorization } = req.headers;
  const userId = req.userId;
  const query = UserModel.where({ _id: userId});
  const user = await query.findOne();
   
  return res.send(userId)
};