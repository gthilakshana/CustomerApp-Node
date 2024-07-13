const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
require('dotenv').config();

const app = express();
const serverPort = process.env.SERVER_PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//============================
const CustomerRouter = require('./routes/CustomerRoutes');
//============================

app.use(express.static('public'));

app.engine('hbs',expressHandlebars.engine({extname:'.hbs',
  layoutsDir:__dirname + '/views/layouts'}));
app.set('view engine', '.hbs');


app.use('/',CustomerRouter);

app.listen(serverPort,()=>{
    console.log(`Server started & Running on port ${serverPort}`);
});
