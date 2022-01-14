const User = require("../models/user");
const fileUploader = require("express-fileupload");
const cloudinary = require("cloudinary");

exports.addAboutYou = async (req, res, next) => {
  const {
    name,
    email,
    headline,
    github,
    twitter,
    instagram,
    linkedin,
    bio,
  } = await req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    return next(new Error("User Already Exists"));
  }
  
  let result;
  if (req.files) {
    let file = req.files.photo;
    result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
      folder: "users"
    });
  }
  if (!email || !name) {
    return next(new Error("Name and email are required", 400));
  }
console.log(result);
  const user = await User.create({
    name,
    email,
    headline,
    github,
    twitter,
    instagram,
    linkedin,
    bio,
    photo_id: result.public_id,
    photo_secure_URL: result.url,

  });
  res.status(201).json({
    sucess: true,
    page: 0,
  });
};
