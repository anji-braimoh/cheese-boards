const {User,Board, Cheese} = require ('../models')
const db = require('./db')

async function seed () {

    // drops and creates table in db
    await db.sync ({force : true})

}





seed()