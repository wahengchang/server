const Schema = require("mongoose").Schema;
const Abstract = require("./abstract");

let advancedUserSchema = new Schema({
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

advancedUserSchema.pre("save", next => {
  this.updatedAt = Date.now;
  next();
});

const userAdvancedModel = new Abstract("advancedUser", advancedUserSchema);

module.exports = userAdvancedModel;
