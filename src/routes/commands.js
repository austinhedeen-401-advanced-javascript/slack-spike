'use strict';

const express = require('express');
const router = express.Router();

const slackbot = require('../slackbot.js');

router.post('/slack/testcommand', (request, response) => {
  // TODO -- Send receipt to Slack
  console.log('Request from Slack');
  slackbot('command-testing', 'Hooray, it worked!');
  response.status(200).send();
});

module.exports = router;
