var express = require('express');
var router = express.Router();

// Models
const Content = require("../models/Content")


/* GET content listing. */
router.get('/get/',(req,res)=>{
  const promise = Content.find({});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  })

});

/* POST content. */
router.post('/add/', (req, res, next) => {
  const {userId,contentText,title} = req.body;

  const content = new Content({ //nesne türetiyoruz
    userId:userId,
    title:title,
    contentText: contentText,

  });
  console.log(content)

  const promise = content.save();
  promise.then((data)=>{
    res.json(data); //başarılı durumunda gösterilecek değer
  }).catch((err)=>{
    res.json(err);
  })

});

module.exports = router;
