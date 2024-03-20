const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://rakeshibm909:rakesh12345@meardatabase.fzh6dii.mongodb.net/devblog?retryWrites=true&w=majority&appName=meardatabase');
  console.log("Data Base Connected");
}

var userSchema =new mongoose.Schema({
  name: String,
  email: String,
  password: String,

});

var userModel = mongoose.model('Users', userSchema);
module.exports=userModel;
