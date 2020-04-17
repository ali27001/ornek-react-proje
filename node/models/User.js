const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  isManager: {
    type: Boolean,
    default: false
  },
  yas: Number,
  tarih:{
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('user',UserSchema);
