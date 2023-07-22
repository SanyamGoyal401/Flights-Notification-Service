const express = require('express');
const {InfoController} = require('../../controllers');
const ticketRouter = require('./ticket-routes');

const router = express.Router();

router.get('/info', InfoController.info);
router.use('/tickets', ticketRouter);

module.exports = router;