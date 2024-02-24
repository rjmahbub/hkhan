const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/users.model');

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

exports.userLogin = async (req, res) => {
    try {
      const {phone, password} = req.body;
      const query = UserModel.where({ phone });
      const user = await query.findOne();
      if(user){
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(isValidPassword){
          const token = jwt.sign({
            userId: user._id,
            name: user.name,
            phone: user.phone,
          }, process.env.JWT_SECRET, {
            expiresIn: '7 days'
          });

          return res.status(200).json({
            login: true,
            userId: user._id,
            name: user.name,
            phone: user.phone,
            token,
            message: 'Login Successful!'
          });
        }
      }
      return res.status(401).json({
        'error': 'Authencation failed!'
      });
    } catch (error) {
      return res.status(401).json({
        'error': 'Authencation failed!'
      });
    }
};

exports.checkLogin = async (req, res) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        return res.status(200).json({
          'login': true,
          'message': 'authenticated!',
          'authUser': decoded
        })
    } catch (error) {
      return res.status(401).json({
        'login': false,
        'message': 'unauthenticated!'
      })
    }
}

exports.updateUser = async (req, res) => {
  const {name, phone, userId, currentPassword, newPassword} = req.body;
  const filter = { _id: userId };
  var update = { name: name, phone: phone };
  if(currentPassword){
    const user = await UserModel.findOne({_id: userId});
    const isValidPassword = await bcrypt.compare(currentPassword, user.password);
    if(isValidPassword){
      var hashedPassword = await bcrypt.hash(newPassword, 10)
      var update = { name: name, phone: phone, password: hashedPassword };
    }else{
      return res.status(200).json({
        'success': false,
        'message': 'Wrong Password!'
      })
    }
  }

  const updatedUser = await UserModel.findOneAndUpdate(filter, update, {
    returnOriginal: false
  });

  if(updatedUser){
    return res.status(200).json({
      'success': true,
      'message': 'User Updated!',
      'user': updatedUser
    })
  }else{
    return res.status(500).json({
      'success': false,
      'message': 'Server Error!'
    })
  }
}

exports.allUsers = async (req, res) => {
  const Users = await UserModel.find({}).exec();
  res.send(Users);
}
