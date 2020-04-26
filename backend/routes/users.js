var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt');
// Models
const Users = require("../models/Users")


/* GET users top 10 listing. */
router.get('/top10',(req,res)=>{
  const promise = Users.find({}).limit(10).sort({date:-1});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })

});



/* GET users listing. */
router.get('/',(req,res)=>{
  const promise = Users.find({});r
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })

});


/*  update  user*/
router.put('/:user_id',(req,res,next)=>{
  const promise = Users.findByIdAndUpdate(
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
router.delete('/:user_id',(req,res,next)=>{
  const promise = Users.findByIdAndRemove(req.params.user_id);

  promise.then((user) => {
    if(!user)
      next({message: "Silmek istediğiniz kullanıcı bulunamadı", code: '3'})
    res.json(user);
  }).catch((err) => {
    res.json(err);
  })

});



/* get user */
router.get('/:user_id',(req,res,next)=>{
  const promise = Users.findById(req.params.user_id);

  promise.then((user) => {
    if(!user)
      next({message: "Aradığınız kullanıcı bulunamadı", code: '1'})
      res.json(user);
  }).catch((err) => {
    res.json(err);
  })

});



/* add user */
router.post('/', (req, res, next) =>{
  const {userName,password,email,firstName,lastName} = req.body;

  bcrypt.hash(password, 10).then((hash) => { //salt şifreleme aralıgı
    // Store hash in your password DB.

    const singup = new Users({ //nesne türetiyoruz
      firstName:firstName,
      lastName:lastName,
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
