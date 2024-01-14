const path = require("path");
const bcrypt = require('bcrypt');
const UserModel = require('../models/users.model');

exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.saveUser = async function (req, res) {
  const {name, phone, password} = req.body;
  const User = new UserModel({ name, phone, password: await bcrypt.hash(password, 10) });
  const newProduct = await User.save();
  if(newProduct === User){
    res.status(200).json({
      success: true,
      'message': 'Member was saved successfully!'
    });
  }else{
    res.status(500).json({
      success: false,
      'message': 'Server Error!'
    });
  }
};

exports.checkLogin = (req, res) => {
  res.send('true')
};
