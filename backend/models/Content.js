const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
  userId:{
    type:String,
    required: true,
    unique: true
  },
  title: String,
  contentText: String,
  tarih:{
    type: Date,
    default: Date.now()
  }
});
module.exports = mongoose.model('content',ContentSchema);
