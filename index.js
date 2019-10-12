/**http is nodejs module, here we are using it to create our server
* for more information refer to this doc https://nodejs.org/api/http.html
*/
const http = require('http')
/**
 * Express is a minimal and flexible Node.js web application framework that 
 * provides a robust set of features for web and mobile applications.
 * For more info refer https://expressjs.com
 */
const express = require('express')
const path = require('path')
/**
 * Mongoose is a MongoDB object modeling tool, it helps as to connect database and
 * design data model.
 */
const mongoose = require('mongoose')
/**
 * To connect with this you must have MongoDB installed in your local system and running on
 * port 27107
 */
mongoose.connect('http://localhost:27017/beginner-app', { useNewUrlParser: true }, (e)=> {
  if(e) {
    console.log('Error while conneting to database', e)
  }else {
    console.log('Database connected')
  }
})
/**
 * Creating express app by calling this function, The express() function is a top-level
 * function exported by the express module. 
 */
const app = express()

/**
 * Setting path of directory where all view files are there, if we call
 * the res.render() function express will search the file in this directory.
 */
app.set('views', path.join(__dirname, 'views'))

/**
 * Setting view engine, it will tell the express that it's view engine is ejs
 * There are many other view engines like handlebars, jade etc. 
 * for more info refer https://expressjs.com/en/guide/using-template-engines.html
 */
app.set('view engine', 'ejs')

/**
 * This is a middleware function express works between request response cycle these middleware 
 * executes between this request response cycle. we call the next middleware by calling next()
 * funtion. This middleware function will be called on get request on base url '/'.
 */

app.get('/', (req, res) => {
  /**
   * This render function will render the index file in view directory and send it to
   * client. In second argument we cant send data to ejs file.
   */
  res.render('index', { title: 'My Express App' })
})

/**Middleware will execute on 'login' get route */
app.get('/login', (req, res) => {
  res.render('login')
})

/**Middleware for 'register' get route */
app.get()

const port = process.env.port || 3000; //port on which server will run

app.set('port', port)

/**Creating sever using http module of nodejs */
const server = http.createServer(app)

/*Server listening on given port */
server.listen(port)

/**Event listener for server 'error' event */
server.on('error', (err) => {
  console.error(err)
})

/**Event listener for server 'listening event' */
server.on('listening', () => {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('listening on ' + bind)
})