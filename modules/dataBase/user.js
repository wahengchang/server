const Schema = require("mongoose").Schema;
const Abstract = require("./abstract");

let UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unqiue: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    default: "N/A"
  },
  createdAt: {
    type: String,
    default: Date.now
  }
});

UserSchema.pre("update", next => {
  this.update({},{ $set: { updatedAt: Date.now } });
  next();
});

const UserModel = new Abstract("UsersDB", UserSchema);

module.exports = UserModel;
