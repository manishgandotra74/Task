const express  = require('express');
const app = express();
   
    const todo = require('../routes/todo');
    app.use('/todo', todo);
    
    module.exports = app;

