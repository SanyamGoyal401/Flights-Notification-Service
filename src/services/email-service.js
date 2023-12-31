const {TicketRepository} = require('../repositories');
const ticketRepository = new TicketRepository();

async function sendEmail(Mailer, mailFrom, mailTo, subject, body) {
    try {
        const response = await Mailer.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: subject,
            html: body,
        })
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


async function createTicket(data){
    try{
        const response = await ticketRepository.create(data);
        return response;
    }
    catch(error){
        throw error;
    }
}

async function getPendingEmails(){
    try{
        const response = await ticketRepository.getPendingTickets();
        return response;
    }
    catch(error){
        throw error;
    }
}
module.exports = {
    createTicket,
    sendEmail,
    getPendingEmails,
}