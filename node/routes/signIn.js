const express = require('express');
const router = express.Router();


router.get('/signIn', (req,res) => {
  res.send("signın sayfası")
});

router.post('/signIn', (req,res) => {
  res.send("signın sayfası post method")
});


module.exports = router;
