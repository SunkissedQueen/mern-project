import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './routes/spadeRoutes'

const app = express()
const PORT = 4000

// mongo connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:4000/Cluster63063')

// bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Cors
app.use(cors())

// routes
// routes(app)

app.get('/', (req, res) =>
  res.send(`Our application is running on Port ${PORT}`)
)

app.listen(PORT, () =>
  console.log(`Your server is running on Port ${PORT}`)
)