// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
// Get our API routes
const commentsAPI = require('./server/routes/commentsApi');
const customerAPI = require('./server/routes/customersApi');
const motoboysAPI = require('./server/routes/motoboysApi');
const ordersAPI = require('./server/routes/ordersApi');
//const loginAPI = require('./server/routes/loginApi');
const Sequelize = require('sequelize');
//authenticat -4 lines
const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');

//add customers DA  as  - 
const customer = require('./server/DataAccsess/customers')

const app = express();
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//auth- 7 lines
app.use(expressSession({
  secret: 'thisIsASecret',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/ezxpress')));

// Set our api routes
app.use('/commentsApi', commentsAPI); // use enables the midddleware, which is customerAPI
app.use('/customersApi', customerAPI);
app.use('/motoboysApi', motoboysAPI);
app.use('/ordersApi', ordersAPI);
//app.use('/loginApi', loginAPI);


// authenticat login routh
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'));
});
app.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login?err',
  session: false
}));
//authenticat 
passport.serializeUser(function (user, done) {
  console.log(user);
  return done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// app.get('/userDetails', function (req, res){
//   res.send(req.user);
// });

app.get('/userDetails', function (req, res){
  if (req.isAuthenticated()){
    res.send(req.user);
  } else {
    res.redirect('/login');
  }
});

passport.use(new LocalStrategy(function(username, password, done) {
  if ((username === "john") && (password === "password")) {
    return done(null, { username: username, id: 1 });
  } else {
    return done(null, false);
  }
}));
 
app.get('/logout', function (req, res) {
  req.logout();
  res.send('Logged out!');
});

// passport.use(new LocalStrategy(
//   function(username,password,done){
//     customer.getOneUser(username,password).then((user)=>{
//       console.log(user)
//       // if(err){return done(err)}   
//       // else if(!user){return done(null,false)
//       // if(!user.verifyPassword(password)){return done(null,false)};
//       return done(null,user)
//     }
//     )}
// ))

passport.use(new LocalStrategy(
  function(username, password, done) {
      customer.findOne({
        username: username
      }, function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false);
        }

        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      });
  }
));
app.post('/',
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success?username='+req.user.username);
  });

// app.post('/login', function(req, res, next){
//   passport.authenticate('local', function(err, user, info){
//     if(err){console.log('err is ' + err); return next(err)}
//     console.log(user)
//     res.send(user)
//   })(req, res, next)

  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/error.html'));
  });

  app.use(express.static(path.join(__dirname, 'dist')));
/////
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'src/error.html'));
});
///////////////////////////////////////////////////////////////////////end auth

// Catch all other routes and return the index file
app.get('*', (req, res) => { 
  console.log('yooooo')
  res.sendFile(path.join(__dirname, 'dist/ezxpress/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));