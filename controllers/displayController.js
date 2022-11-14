const User = require('../models/user');
const fileUploader = require('express-fileupload');
const cloudinary = require('cloudinary');

exports.displayAboutEveryone = ( async (req,res,next) => {

  const data = await User.find();
  console.log(data);
  res.status(200).json(data);

})