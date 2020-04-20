var express = require('express');
var router = express.Router();
const Signup = require("../models/SignUp");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* . */
router.post('/', function(req, res, next) {
  const {userName, password} = req.body;
  console.log("userName 1")
  console.log(userName)

  Signup.findOne({
    userName: userName
  }, (err,user) =>{

    if(err)
      throw  err;

    if(!user){
      res.json({
        status:false,
        message: 'Authentication başarısız oldu, Kullanıcı bulunamadı.'
      })
    } else {
      bcrypt.compare(password, user.password ) //servisten gönderilen ve dbden gelen parola
        .then((result) => {
          if(!result){
            res.json({
              status: false,
              message: 'Authentication başarısız oldu, Kullanıcı şifresi yanlış.'
            })
          } else {
            const payload = {
              userName,
            };
            const token = jwt.sign(payload, req.app.get('api_secret_key'), {
              expiresIn: '12h' // 12 saat
            });
            res.json({
              status: true,
              token
            })
          }
        })
    }

  })

});

module.exports = router;

