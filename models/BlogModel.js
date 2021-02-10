const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Blog', BlogSchema);
