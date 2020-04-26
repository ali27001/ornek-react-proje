var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');
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
    req.body,
    {
      new:true
    }
    );

  promise.then((user) => {
    if(!user)
      next({message: "Güncellemek istediğin kullanıcı bulunamadı", code: '2'})
    res.json(user);
  }).catch((err) => {
    res.json(err);
  })

});


/* Delete user */
router.delete('/delete/:user_id',(req,res,next)=>{
  const promise = Signup.findByIdAndRemove(req.params.user_id);

  promise.then((user) => {
    if(!user)
      next({message: "Silmek istediğiniz kullanıcı bulunamadı", code: '3'})
    res.json(user);
  }).catch((err) => {
    res.json(err);
  })

});

/* get user */
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
/* GET users top 10 listing. */
router.get('/top10',(req,res)=>{
  const promise = Signup.find({}).limit(10).sort({age:-1});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })

});

/* add user */
router.post('/add/', (req, res, next) =>{
  const {userName,age,password,email} = req.body;

  bcrypt.hash(password, 10).then((hash) => { //salt şifreleme aralıgı
    // Store hash in your password DB.

    const singup = new Signup({ //nesne türetiyoruz
      userName:userName,
      age:age,
      password:hash,
      email:email
    });

    const promise = singup.save();
    promise.then((data)=>{
      res.json(data); //başarılı durumunda gösterilecek değer
    }).catch((err)=>{
      res.json(err);
    })
  });



});

module.exports = router;
