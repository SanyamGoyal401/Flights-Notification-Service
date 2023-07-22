const dotenv = require('dotenv');
const path = require('path')


dotenv.config({path: path.resolve(__dirname, '../../.env')}); 

module.exports = {
    PORT: process.env.PORT,
    GMAIL_NOTI_PASS: process.env.GMAIL_NOTI_PASS,
    GMAIL_NOTI_ID: process.env.GMAIL_NOTI_ID,
}