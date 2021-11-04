const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const { environment } = require('./config');
const isProduction = environment === 'production';
const app = express();

//PRE-REQUEST MWARE
//mware logs info about req/res
app.use(morgan('dev'));
app.use(cookieParser());
//parse json req.body w/content-type app/json
app.use(express.json());
// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
  }
  // helmet helps set a variety of headers to better secure your app
  app.use(helmet({
    //react is generally safe at mitigating XSS
    // so CSS can be set false
    contentSecurityPolicy: false
  }));
    // Set the _csrf token and create req.csrfToken method
  app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        //httpOnly true, so can't be read by js
        httpOnly: true,
      },
    })
  );
//PRE-REQUEST MWARE

const routes = require('./routes');
app.use(routes);



module.exports = app;