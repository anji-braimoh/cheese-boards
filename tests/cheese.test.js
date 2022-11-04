const Cheese = require("../models/cheese.model")
const db = require("../db/db")
const {seed} = require("../db/seed")



beforeAll (async () => await seed ())

describe("Does the table work" , () => {
     test ('Cheese table is made' , async() => {
        const data = await db.getQueryInterface().showAllSchemas();
        expect(data[0].title).toBe(Cheese)
     })
})