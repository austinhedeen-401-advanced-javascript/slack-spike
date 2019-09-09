'use strict';

require('dotenv').config();

const slackbot = require('./src/slackbot.js');

slackbot('bot-testing', 'testing bot-testing message!');
