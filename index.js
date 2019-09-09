'use strict';

require('dotenv').config();

const app = require('./src/app.js');

const slackbot = require('./src/slackbot.js');

app.start(3000);

// slackbot('bot-testing', 'testing bot-testing message!');

