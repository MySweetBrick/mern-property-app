const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
// const db = require('./config/dbs');
const connectDB = require('./config/dbs');

connectDB();

const app = express();
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/rentals/properties', require('./routes/propertyRoutes'));

// mongoose.connect('mongodb://127.0.0.1:27017/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// mongoose.connection.on('connected', () => {
//     console.log('Mongoose is connected');
// });



app.listen(port, () => console.log(`Server started on port ${port}`))