'use strict';

require('dotenv').config();

const app = require('./src/app.js');

const slackbot = require('./src/slackbot.js');

app.start(process.env.PORT || 3000);

// slackbot('bot-testing', 'testing bot-testing message!');

