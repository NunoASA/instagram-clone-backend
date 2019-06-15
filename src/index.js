const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb+srv://userFromApp:lvNl31r6tSV1BBkD@instagram-clone-obbbk.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })


app.get('/', (req, res) => {
	return res.send(`hello  ${req.query.name}`)
})

app.listen(3333)