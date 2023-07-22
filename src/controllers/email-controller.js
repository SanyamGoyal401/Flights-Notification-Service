const { StatusCodes } = require('http-status-codes');
const {EmailService} = require('../services');
const { ErrorResponse, SuccessReponse } = require('../utils/common');

async function createTicket(req, res){
    try {
        const response = await EmailService.createTicket({
            subject : req.body.subject,
            content: req.body.content,
            recepientEmail: req.body.recepientEmail,
        })
        SuccessReponse.data = response;
        return res.status(StatusCodes.OK)
                    .json(SuccessReponse);
        
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
                    .json(ErrorResponse);
    }
}

module.exports = {
    createTicket,
}