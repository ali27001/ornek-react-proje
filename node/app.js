const express = require('express')
const app = express();

const signIn = require('./routes/signIn');
const signUp = require('./routes/singUp');

app.use('/',signIn);
app.use('/user',signUp);


app.listen(3000, () =>{
  console.log("express server çalıştı")
})
