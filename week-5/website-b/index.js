const express = require('express')
const app = express()

var cors = require('cors')
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const port = 3001

app.use(cors())
app.use(jsonParser);
app.use(urlencodedParser);

<<<<<<< HEAD
app.get("/", async (req, res) => {
    const response = await fetch("http://localhost:3000/")
    const body = await response.text()

    console.log(body)
    res.json('website-b')
})

app.get('/trigger-webhook-event', async (req, res) => {
  try {
    // do something to trigger website-a
    const data = {
      secret: "secret123",
    }

    const response = await fetch('http://localhost:3000/github-event', {
      method: 'POST',
      headers: { "Context-type": "application/json" },
      body: JSON.stringify(data)
    })
    
    const responseData = await response.json()
    console.log(responseData)

    // return success
    res.json('event success')
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server Error"})
  }
=======
app.get('/', (req, res) => {
    res.json('website A')
})

app.post('/github-event', (req, res) => {
  if (req.body.secret !== 'secret123') {
    return res.status(403).json({ error: "Invalid secret" });
  }

  console.log('Incoming Webhook')
  res.json("")
>>>>>>> a8e1555b719bb140993c5dbf65b796cfbc8b6299
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})