const express = require('express');
const path = require('path');
const sendTheWords = require('./sendTheWords');
const sendAllTheWords = require('./sendAllTheWords')

const app = express();
const PORT_NUMBER = 3000;

app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname, "index.html"))
})

app.get('/api/v1/today', sendTheWords)

app.get('/api/v1/all', sendAllTheWords)

app.listen(PORT_NUMBER, ()=>{console.log(`App is running on port ${PORT_NUMBER}`)})
