const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the user schema
const UserSchema = new Schema({
  name:{
    type: String,
    required:true
  },
  username:{
    type:String,
    required:true,
    unique:true
  },
  gender:{
    type:String
  }

});

mongoose.model('Users', UserSchema);
