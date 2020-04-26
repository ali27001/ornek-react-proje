const express = require('express');
const router = express.Router();

/* GET users listing. */

//Models
const User = require('../models/User')

router.post('/new', (req, res, next)=> {
  const user = new User({
    name:'asa',
    isManager:true,
    yas: 22
  })
  user.save((err,data) => {
    if(err)
      console.log(err)

    res.json(data);
  });

});

module.exports = router;
