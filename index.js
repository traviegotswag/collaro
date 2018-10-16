const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const db = require('./db');
const multer = require('multer');


/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

// Set up middleware
app.use(methodOverride('_method'));
// app.use(express.static('public'));
app.use(express.static(`${__dirname}/public/`));
app.use(express.json());

app.use(cookieParser());
app.use(express.urlencoded({
  extended: true
}));

//===================================

const upload = multer({ dest: 'public/uploads/' });

//UNDERSTAND HOW THIS WORKS
// var storage = multer.diskStorage({
 //    // __basedir
 //     destination: function(req, file, callback) {
 //                    callback(null, "/public/uploads");
 //                    },
 //     filename: function(req, file, callback) {
                    // callback(null, file.originalname + "_" + Date.now() );
 //                    }
 // });
// var upload = multer({storage: storage});

//===================================


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Routes
 * ===================================
 */

// Import routes to match incoming requests
require('./routes')(app, db, upload); //APP being express, DB REFERS TO DB FILE
//DOES THE SEQUENCE MATTER?????

// Root GET request (it doesn't belong in any controller file)
app.get('/', (request, response) => {
    let userCookies = request.cookies['loggedIn'];
    let username = request.cookies['username'];
    if (userCookies) {
        response.redirect('/users/' + username);
    } else {
        response.render('root');
    }
});

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));

// Run clean up actions when server shuts down
server.on('close', () => {
  console.log('Closed express server');

  db.pool.end(() => {
    console.log('Shut down db connection pool');
  });
});
