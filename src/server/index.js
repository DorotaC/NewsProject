var path = require('path')
//const mockAPIResponse = require('./mockAPI.js')
const meaningCloud = require('meaning-cloud');

//setting to hide API credentials
const dotenv = require('dotenv');
dotenv.config();
// var textapi = new meaningCloud({
//   application_key: process.env.API_KEY
// });

// Express to run server and routes
const express = require('express')
const app = express()

// Body-parser as middleware
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross-origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log('Zaraz będzie dirname')
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/postInput', function (req, res) {
    //res.send(mockAPIResponse)
    console.log('Test dziala')
})
