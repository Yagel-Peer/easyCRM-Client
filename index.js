const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const methods = require('method-override');
const cookieParser = require('cookie-parser');
const colors = require('colors');

const secure = require('./src/middleware/secure');

require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

app.use(cookieParser());

app.use(methods('_method'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./src/routes/home'));
app.use('/app/leads', secure, require('./src/routes/leads'));
app.use('/app/products', secure, require('./src/routes/products'));
app.use('/app/sales', secure, require('./src/routes/sales'));

app.listen(port, () => {
  console.log(
    `
  EasyCRM Client Side Is Running
  on: http://localhost:${port}
  `.cyan.bold
  );
});
