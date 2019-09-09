'use strict';

const express = require('express');
const router = express.Router();

router.post('/slack/testcommand', (request, response) => {
  console.log('Something happened');
});



module.exports = router;