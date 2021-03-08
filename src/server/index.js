var path = require('path')
const fetch =require ('node-fetch')
//const mockAPIResponse = require('./mockAPI.js')
//const meaningCloud = require('meaning-cloud');

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
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
    console.log('Dziala')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/postInput', async function (req, res){
    //let urlToGo = req.body.uInput;
    //console.log(urlToGo)
    const apiURL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.uInput}&lang=en`
    const responseAPI = await fetch(apiURL)
    //console.log(responseAPI)
    try {
      const dataAPI = await responseAPI.json()
      //console.log(dataAPI.agreement)
      res.send(dataAPI)
      //return dataAPI
    } catch(error) {
      console.log(error)
    }

    //const responseAPI = getDataFromAPI(apiURL)
    //console.log(responseAPI)
    //res.send(responseAPI)
    //onsole.log('udało się')
    //console.log(getDataFromAPI(apiURL).body)
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
})


// const getDataFromAPI = async (connectAPI) => {
//   const response = await fetch(connectAPI)
//   try {
//     if(!response.ok){
//       throw Error(response.statusText)
//     }
//     const dataAPI = await response.json()
//     //response.send(dataAPI)
//     return dataAPI
//     //next()
//   } catch (error) {
//       console.log(error)
//       //next(error)
//   }
// }
