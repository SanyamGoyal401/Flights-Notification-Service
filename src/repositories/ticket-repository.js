const CrudRepository = require('./crud-repository');


const {Ticket} = require('../models');
const { ENUMS } = require('../utils/common');
const {PENDING} = ENUMS.STATUS;
class TicketRepository extends CrudRepository{
    constructor(){
        super(Ticket)
    }

    async getPendingTickets(){
        const response = await Ticket.findAll({
            where: {
                status: PENDING
            }
        });
        return response;
    }
}

module.exports = TicketRepository;