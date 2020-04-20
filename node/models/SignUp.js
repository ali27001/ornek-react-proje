const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
  userName:{
    type:String,
    required:[true,'`{PATH}` alanı zorunludur.' ]
  },
  age: Number,
  password: String,
  email: String,
  tarih:{
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('signUp',SignUpSchema);
