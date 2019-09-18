
require('./models/db');
const employeeController = require('./controller/employeeController');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

//Middleware bodyParser
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

//Adding router using middleware
app.use('/employee', employeeController);
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');


app.listen(3000, () =>{
    console.log('Express Server started at port : 3000');
});

