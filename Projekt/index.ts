const express = require('express')
const app = express()
app.get('/', function (req, res) {
    const num1 = req.query.num1
    const num2 = req.query.num2
    const operations = req.query.operations
  res.send(`${num1} ${num2} ${operations}`)
})
app.listen(3000)
//po chorobie, sprawdzic i nadrobic zaleglosci
app.use()