const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/UserModel');

const UserController = {
  registerUser: async (req, res) => {
    const userExists = await User.findOne({ email: req.body.email }).exec();
    if (userExists) {
      return res.status(409).json({
        status: res.statusCode,
        message: `uh oh, email ${userExists.email} has already been used`
      })
    }

    const hashedPass = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      _id: mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPass
    });

    user.save()
      .then(async (result) => {
        const user = {
          id: result._id,
          email: result.email,
          firstName: result.firstName,
          lastName: result.lastName
        };
        const token = await jwt.sign(user, process.env.SECRET_KEY);
        return res.status(201).json({
          status: res.statusCode,
          result,
          token
        });
      })
      .catch((error) => res.status(500).json({
        status: res.statusCode,
        message: `Ooops, something went wrong: ${error}`
      }))
  }
}

module.exports = UserController;
