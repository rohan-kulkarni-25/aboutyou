require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan')
const fileUpload = require('express-fileupload');

if (process.env.NODE_ENV == 'production') {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get("*",(req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}


// Regular Middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'/tmp/'
}));

// Morgan Middleware 
app.use(morgan('tiny'))

// import all routes here 
const user = require('./routes/user')
const display = require('./routes/display')

// router middleware 
app.use('/api/v1',user)
app.use('/api/v1',display)

module.exports = app;
