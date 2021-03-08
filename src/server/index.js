var path = require('path')
const fetch =require ('node-fetch')

//setting to hide API credentials
const dotenv = require('dotenv');
dotenv.config();


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

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/postInput', async function (req, res){
    const apiURL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.uInput}&lang=en`
    const responseAPI = await fetch(apiURL)
    try {
      const dataAPI = await responseAPI.json()
      res.send(dataAPI)
    } catch(error) {
      console.log(error)
    }
})
