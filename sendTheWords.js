const words = require('./weirdThingsISay.json');
const luxon = require('luxon');

let lastRequest = luxon.DateTime.local().setZone('Australia/Melbourne');
let quote = words[Math.floor(Math.random() * words.length)];

const sendTheWords = (req, res) => {
  let thisRequest = luxon.DateTime.local().setZone('Australia/Melbourne');

  if (thisRequest.toLocaleString() !== lastRequest.toLocaleString()) {
    quote = words[Math.floor(Math.random() * words.length)];
  }

  lastRequest = thisRequest;
  res.send(quote);
};

module.exports = sendTheWords;
