const express = require('express')
const route = require('./route')
const app = express()
const port = process.env.PORT || 5000

app.use('/api', route)

app.listen(port, () => console.log(`Running on port: ${port}`))