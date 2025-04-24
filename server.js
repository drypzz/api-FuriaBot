const express = require('express')
const cors = require('cors')
const chatRoutes = require('./src/routes/chat')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/chat', chatRoutes)

app.listen(3022, () => console.log('API rodando em http://localhost:3022'))
