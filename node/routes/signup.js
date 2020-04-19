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

/* update */
router.put('/put/:user_id',(req,res,next)=>{
  const promise = Signup.findByIdAndUpdate(
    req.params.user_id,
    req.body
    );

  promise.then((user) => {
    if(!user)
      next({message: "Güncellemek istediğin kullanıcı bulunamadı", code: '2'})
    res.json(user);
  }).catch((err) => {
    res.json(err);
  })

});


router.get('/get/:user_id',(req,res,next)=>{
  const promise = Signup.findById(req.params.user_id);

  promise.then((user) => {
    if(!user)
      next({message: "Aradığınız kullanıcı bulunamadı", code: '1'})
      res.json(user);
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
