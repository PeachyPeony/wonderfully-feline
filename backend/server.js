const express = require('express')
require('dotenv').config()

const connectDB = require('./config/database')
const catFactRoutes = require('./routes/catFactRoutes')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use('/api/facts', catFactRoutes)

app.get('/', (req, res) => {
    res.send('Welcome to the Cat Fact Jar API! 🐱')
})

connectDB()

app.listen(PORT, () => {
    console.log(`Cat Fact Jar API is running on port ${PORT}`)
})