const express = require('express')
const analyzeRoute = require('./routes/analyze.route')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hi there. Send a POST request to endpoint /analyze to analyze your text!')
})

app.use('/analyze', analyzeRoute)

const unknownEndpoint = (req, res) => {
  res.status(400).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  return res.status(400).send({ error: 'Text input is not valid. Please try again!' })
  next(error)
}

app.use(errorHandler)

module.exports = app