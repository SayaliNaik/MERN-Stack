const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
 

const app=express();
const router= express.Router();
//Bodyparser Middleware
app.use(bodyParser.json());


//DC Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
// console.log('hello');
mongoose
	.connect(db)
	.then(()=> console.log('MongoDB connected...'))
	.catch(err => console.log(err));

//use routes
//api/items should refer to 'items' which is the destination defined by const items=....
app.use('/api/items', items);

const port = process.env.PORT || 5000;
app.listen(port,()=> console.log(`Server started on port ${port}`));