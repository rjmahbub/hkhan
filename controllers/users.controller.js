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
    res.send('Success');
  }else{
    res.send('error')
  }
  
  /* const name = req.body.name;
  const age = Number(req.body.age);
  const user = {
    name,
    age,
  };
  users.push(user);
  res.status(201).json({
    success: true,
    users,
  }); */
};
