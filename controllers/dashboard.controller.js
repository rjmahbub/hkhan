const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

exports.userRegister = async function (req, res) {
  const {room, name, phone, password} = req.body;
  const User = new UserModel({ room, name, phone, password: await bcrypt.hash(password, 10) });
  const savedUser = await User.save();
  if(savedUser === User){
    return res.status(200).json({
      success: true,
      'message': 'Member was saved successfully!'
    });
  }else{
    return res.status(500).json({
      success: false,
      'message': 'Server Error!'
    });
  }
};
