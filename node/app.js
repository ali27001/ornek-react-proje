const express = require('express')
const app = express();

const signIn = require('./routes/signIn');
const signUp = require('./routes/singUp');

//middleware

app.use((req, res , next) =>{
  const isLogin = true;

  if(isLogin){
    next();
  }else{
    res.send("lütfen giriş yapın.");
  }
})



app.use('/',signIn);
app.use('/user',signUp);


app.listen(3000, () =>{
  console.log("express server çalıştı")
})
