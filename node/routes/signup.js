var express = require('express');
var router = express.Router();

// Models
const Signup = require("../models/SignUp")

/* GET users listing. */
router.get('/get/',(req,res)=>{
  const promise = Signup.find({});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })

});



router.post('/add/', (req, res, next) =>{
  const {userName,age,password,email} = req.body;

  const singup = new Signup({ //nesne türetiyoruz
    userName:userName,
    age:age,
    password:password,
    email:email
  });

  const promise = singup.save();
  promise.then((data)=>{
    res.json(data); //başarılı durumunda gösterilecek değer
  }).catch((err)=>{
    res.json(err);
  })

});

module.exports = router;
