const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./server/router');

const app = express();
app.use(cors());

mongoose.connect(`mongodb://127.0.0.1/pre_gl`, {useNewUrlParser: true}, ((err)=>{
    if(err){
        console.log("An error occured connecting to the database. Error below: \n", err);
    }
}));

app.use(express.static(__dirname+'/public/'));

app.use('/', router);

app.listen(8900, ()=>{
    console.log("Server listening at localhost:8900");
});