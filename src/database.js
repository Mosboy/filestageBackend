const { MongoClient } = require('mongodb');

const database = module.exports;

// database.connect = async function connect() {
//   database.client = new MongoClient('mongodb://root:1234@database:27017/test');
//   await database.client.connect();
// };

database.connect = async function connect() {
  database.client = new MongoClient('mongodb+srv://mosboy:mosboy24@cluster0.l7wvw.mongodb.net/?retryWrites=true&w=majority');
  await database.client.connect();
};
