const express = require('express')
const app = express()

var cors = require('cors')
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const port = 3000

app.use(cors())
app.use(jsonParser);
app.use(urlencodedParser);

app.get('/', (req, res) => {
    res.json('website A')
})

app.post('/github-event', (req, res) => {
  if (req.body.secret !== 'secret123') {
    return res.status(403).json({ error: "Invalid secret" });
  }

  console.log('Incoming Webhook')
  res.json("")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})