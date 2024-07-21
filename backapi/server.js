const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('../backapi/router');
const mongoose=require('mongoose')
const cors=require('cors');


const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(usersRouter);


mongoose.connect('mongodb://localhost:27017/backapi',{useNewUrlParser:true, useUnifiedTopology:true})
        .then(()=>console.log('MongoDB connected'))
        .catch(err =>console.error('connection error:',err));


        app.use(cors({
            origin: '*',
            methods: 'GET, POST, PUT, PATCH, DELETE',
            allowedHeaders: 'Content-Type, Authorization'
        }));
        

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
