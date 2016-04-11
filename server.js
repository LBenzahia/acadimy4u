// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
// create the app and the sub apps

var app      = express();// the main app
// the sub app
var adminApp, blogApp, authApp    = express();

var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
//var nunjucks     = require('nunjucks');

var configDB = require('./config/database.js');


// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use(express.static(__dirname + '/public'));
/*app.use('/admin', adminApp);
adminApp.use('/administrator')
app.use('/blog', blogApp);
blogApp.use('AdminBlog');
app.use('/auth_app', authApp);*/

app.set('view engine', 'ejs'); // set up ejs for templating
/*nunjucks.configure('views', {
    autoescape: true,
    express: app
}); // set up nunjucks for templating*/

// required for passport
app.use(session({ secret: 'hiwelcometoyouonlakhdaracademy' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//load controllers


//load routes ======================================================================

require('./welcome_app/routes.js')(app, passport);
require('./app_auth/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
require('./user_manager/routes.js')(app, passport);
// case of 404 page note found
app.use("*",function(req,res){
  var pagenotfound = 'Page not found';
  res.render('welcomeApp/404.ejs',{
    title : pagenotfound
  }

);
});
// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
