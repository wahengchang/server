const mongoose = require("mongoose");

// Establish database connection
function initDB() {
  const mongoUsername = process.env.MONGO_USERNAME;
  const mongoPassword = process.env.MONGO_PASSWORD;
  const mongoURL = process.env.MONGO_URL;
  const databaseKey = `mongodb://${mongoUsername}:${mongoPassword}@${mongoURL}`;

  mongoose.connect(databaseKey, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected (Abstract)");
    }
  });
  global.DBInstance = mongoose;
}

class Abstract {
  constructor(modelName, schema) {
    if (!global.DBInstance) {
      initDB();
    }

    this.modelName = modelName;
    this.schema = schema;
  }

  // Copy the inputed data to the model instance
  copyDataToModelInstance(data, modelInstance) {
    Object.keys(data).forEach(key => {
      modelInstance[key] = data[key];
    });
  }

  // Create a new document
  create(data) {
    return new Promise((resolve, reject) => {
      const _mongoose = global.DBInstance;
      const Instance = _mongoose.model(this.modelName, this.schema);
      const _instance = new Instance();

      // copy the input data to the model Instance
      this.copyDataToModelInstance(data, _instance);

      _instance.save(err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  // Update by condition
  updateByCondition(condition, update, options) {
    return new Promise((resolve, reject) => {
      const _mongoose = global.DBInstance;
      const Instance = _mongoose.model(this.modelName, this.schema);

      Instance.findOneAndUpdate(condition, update, options, (err, obj) => {
        if (err) {
          reject(err);
        } else {
          resolve(obj);
        }
      });
    });
  }

  // Get by condition
  getByCondition(condition) {
    return new Promise((resolve, reject) => {
      const _mongoose = global.DBInstance;
      const Instance = _mongoose.model(this.modelName, this.schema);

      const query = Instance.findOne(condition);

      query.exec((err, obj) => {
        if (err) {
          reject(err);
        } else {
          resolve(obj);
        }
      });
    });
  }

  // Delete by condition
  deleteByCondition(condition, options) {
    return new Promise((resolve, reject) => {
      const _mongoose = global.DBInstance;
      const Instance = _mongoose.model(this.modelName, this.schema);

      Instance.findOneAndRemove(condition, options, err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = Abstract;
