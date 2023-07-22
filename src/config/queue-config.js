const amqplib = require('amqplib');
const { GMAIL_NOTI_ID } = require('./server-config');
const { EmailService } = require('../services');
const Mailer = require('./email-config');

let connection, channel;
async function connect() {
    try {
        connection = await amqplib.connect("amqp://localhost");
        channel = await connection.createChannel();
        await channel.assertQueue("noti-queue");
    } catch (error) {
        console.log(error);
    }
}
async function consume() {
    try {
        await channel.consume("noti-queue", async (data) => {
            const dataObj = JSON.parse(data.content);
            await EmailService.sendEmail(Mailer, GMAIL_NOTI_ID, dataObj.recepientEmail, dataObj.subject, dataObj.body);
            channel.ack(data);
        })
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    connect,
    consume,
}