require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/database');
const cloudinary = require('cloudinary')

const {PORT} = process.env;
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



app.listen(PORT,()=>{
  console.log(`Aboutyou Server Running on PORT ${PORT}`);
})