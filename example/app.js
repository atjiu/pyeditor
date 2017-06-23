var http = require('http')
var path = require('path')
var express = require('express')
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express()
app.use(express.static(path.resolve(__dirname, '../')))
app.use(express.static(path.resolve(__dirname, 'uploads')))

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/upload', upload.single('file'), function(req, res, next) {
  res.send({ code: 200, description: "", detail: 'http://127.0.0.1:3000/' + req.file.filename })
})

var port = 3000
http.createServer(app).listen(port, function() {
  console.log('Server listening on port ' + port)
})
