const {Critics } = require('../models/feedback')

const migrateSchema = async function(){
    await Critics.sync()
}

module.exports = {
    migrateSchema
}