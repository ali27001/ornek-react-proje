const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
  userName:{
    type:String,
    required:[true,'`{PATH}` alanı zorunludur.' ],
    unique: true
  },
  age: Number,
  password: {
    type: String,
    maxLength:20,
    minLength:4
  },
  email: String,
  tarih:{
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('signUp',SignUpSchema);
