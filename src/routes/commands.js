'use strict';

const express = require('express');
const router = express.Router();

router.post('/slack/testcommand', (request, response) => {
  // TODO -- Send receipt to Slack
  console.log('Request from Slack');
  response.status(200).send();
});

module.exports = router;
