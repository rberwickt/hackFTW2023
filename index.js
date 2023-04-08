const app = require('express')()
const http = require('http').createServer(app)
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()


const sendFileOptions = {
    root: __dirname + '/static',
    dotfiles: 'deny'
}

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile('/index.html', sendFileOptions)
})

app.get('/form', (req, res) => {
  res.sendFile('/form.html', sendFileOptions)
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