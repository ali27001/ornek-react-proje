const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  // userName:{
  //   type:String,
  //  // required:[true,'`{PATH}` alanı zorunludur.' ],
  //  // unique: true
  // },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: {
    type: String,
    maxLength:20,
    minLength:4
  },
  email: {
    type:String,
    required:[true,'`{PATH}` alanı zorunludur.' ],
    unique: true
    },
  date:{
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Users',UsersSchema);
