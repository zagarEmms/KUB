const express = require('express')
const app = express()
const PORT = 3000

app.use(express.static('dist'))

app.listen(PORT, function (err) {
    if (err) console.log(err)
    console.log('Server listening on PORT', PORT)
    console.log('http://localhost:3000/index.html')
})