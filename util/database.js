const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://trung:trungtrinh38@cluster0.px6on.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected !");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
