const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/users.model');


exports.Index = (req, res) => {
  return res.send(req.authUser);
  //return res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.userRegister = async function (req, res) {
  const {name, phone, password} = req.body;
  const User = new UserModel({ name, phone, password: await bcrypt.hash(password, 10) });
  const newProduct = await User.save();
  if(newProduct === User){
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
            'token': token,
            'message': 'Login Successful!'
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

exports.allUsers = (req, res) => {
  
}