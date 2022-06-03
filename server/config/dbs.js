const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// const connectionString = process.env.MONGODB_URL;

// mongoose.connect(connectionString, {
//   useNewUrlParser: true })
//   .catch((e) => {
//     console.error('Connection error', e.message)
//   });
// console.log('Database connected');

const connectDB = async () => {
  try {
    const connectionString = await mongoose.connect(process.env.MONGODB_URL)

    console.log(`MongoDB Connected: ${connectionString.connection.host}:${connectionString.connection.port}`);
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

const db = mongoose.connection;

module.exports = connectDB;