const words = require('./weirdThingsISay.json');
const moment = require('moment');

let lastRequest = moment();
let quote = words[Math.floor(Math.random()*words.length)];

const sendTheWords = (req, res) => {
	if (moment.duration(moment().diff(lastRequest)).asDays() > 1) {
		lastRequest = moment();
		quote = words[Math.floor(Math.random()*words.length)];
	}

	res.send(quote)
}

module.exports = sendTheWords
