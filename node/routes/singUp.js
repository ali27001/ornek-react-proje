const express = require('express');
const router = express.Router();


router.get('/signUp', (req,res) => {
  res.send("sigUP sayfası")
});

router.post('/signUP', (req,res) => {
  res.send("signUP sayfası post method")
});


module.exports = router;
