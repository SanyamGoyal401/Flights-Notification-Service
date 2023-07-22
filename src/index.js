const express = require('express')

const{ServerConfig, Logger} = require('./config');
const apiRoutes = require('./routes')
const {Queue} = require('./config')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res)=>{
    return res.json({msg: "server is live"});
})


app.use('/api', apiRoutes);


app.listen(ServerConfig.PORT, async()=>{
    console.log(`Successfully started the port at ${ServerConfig.PORT}`);
    Logger.info('Successfully started server', {})
    await Queue.connect();
    await Queue.consume();
})