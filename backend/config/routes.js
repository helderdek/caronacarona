const express = require('express')

module.exports = function(server){

//API Routes    
const router = express.Router()
server.use('/api', router)

const billingCycleServices = require('../api/billingCycle/billingCycleService')
billingCycleServices.register(router, '/billingCycles')

}