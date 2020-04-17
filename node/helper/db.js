const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect("mongodb+srv://dbUser:dbUser@cluster0-s0axg.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true , useUnifiedTopology: true
    });
  mongoose.connection.on('open',()=>{
    console.log("Mongodb bağlantısı sağlandı")
  })
  mongoose.connection.on('error',(err)=>{
    console.log("Mongodb bağlantısı Hata oldu -> " + err)
  });

   mongoose.Promise = global.Promise
};

