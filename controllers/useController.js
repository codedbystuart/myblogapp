const mongoose = require('mongoose');
const User = require('../models/UserModel');

const UserController = {
  registerUser: async (req, res) => {
    const user = new User({
      _id: mongoose.Types.ObjectId(),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    });

    const userExists = await User.findOne({ email: req.body.email }).exec();
    if (userExists) {
      return res.status(409).json({
        status: res.statusCode,
        message: `uh oh, email ${userExists.email} has already been used`
      })
    }
    user.save()
      .then((result) => res.status(201).json({
        status: res.statusCode,
        result
      }))
      .catch((error) => res.status(500).json({
        status: res.statusCode,
        message: 'Ooops, something went wrong'
      }))
  }
}

module.exports = UserController;
