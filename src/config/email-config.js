const nodemailer = require('nodemailer');

const { GMAIL_NOTI_ID, GMAIL_NOTI_PASS } = require('./server-config');

const mailsender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: GMAIL_NOTI_ID,
        pass: GMAIL_NOTI_PASS,
    }
})


module.exports = mailsender;