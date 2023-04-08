const fs = require("fs");
const chartjs = require("chart.js")
const companies = require('./companies.json')
// const Plotly = require("plotly.js-dist")
const { parse } = require("csv-parse");
console.log("hello")
const app = require('express')()
const http = require('http').createServer(app)
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()


const companyArray = fs.readFileSync('./forest500-companies-data-download-2022.csv', {encoding:'utf8', flag:'r'}).split('\n')
const newCompanyArray = companyArray.map(e => e.split(','))
const nameArray = []; 

newCompanyArray.forEach(company => {
  if (!nameArray.includes(company[2].substring(1, company[2].length - 1))) nameArray.push(company[2]) 
})


const sendFileOptions = {
    root: __dirname + '/static',
    dotfiles: 'deny'
}

app.use(bodyParser.json())
//

app.get('/companies/:yourCompanies', (req, res) => { 
  const yourCompanies = req.params['companies'].split('&'); 
  /* 
  * find each companies index in newCompanyArray
  * store each companies 7th and 14th index
  * send html to make the bargraphs 
  * 
  */
 const dataArray = yourCompanies.map(e => {e: companies[e]}) 
  const htmlString = '<header>WHATS UP</header>'; 
  res.send(JSON.stringify(dataArray))
})
app.get('/csv'  , async (_, res) => { 
  //const companyArray = fs.readFileSync('./forest500-companies-data-download-2022.csv', {encoding:'utf8', flag:'r'}).text().split("\n").split(",");

  let string = ""; 
  nameArray.forEach(e => string += e + " ")
  res.send(string)
}) ;

app.get('/', async (req, res) => {
    res.sendFile('/index.html', sendFileOptions)
})

app.get('/form', (req, res) => {
  res.sendFile('/form.html', sendFileOptions)
})

app.get("/compare", (req,res)=>{
  //this is per search methinks
  console.log("dog");
  //return //THE JSON
})

app.get("/rainforest.jpg", (req,res)=>{
  res.sendFile("/rainforest.jpg", sendFileOptions)
})

app.use((req, res) => {
    res.sendFile(req.url, sendFileOptions, (e) => {
      if (e) {
        res.status(404).sendFile('/404/index.html', sendFileOptions)
      }
    })
  })
  
http.listen(process.env.PORT, function(){
    console.log(`Server listening on *:${process.env.PORT}`)
})

let x = ""




// fs.createReadStream("./forest500-companies-data-download-2022.csv")
//   .pipe(parse({ delimiter: ",", from_line: 35357 }))
//   .on("data", function (row) {
//     console.log(row);
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   })
//   .on("end", function () {
//     console.log("finished");
//   });


// to make variable use let or const
// no semi-colons needed
// to make html object document.