const words = require('./weirdThingsISay.json')

const sendAllTheWords = (req, res) => {
	res.json(words)
}

module.exports = sendAllTheWords
