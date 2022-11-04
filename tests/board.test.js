const Board = require("../models/board.model");
const db = require("../db/db");
const {seed} = require("../db/seed");



beforeAll (async () => await seed ())

describe("Does the table work" , () => {
     test ('Board table is made' , async() => {
        const data = await db.getQueryInterface().showAllSchemas();
        expect(data[0].type).toBe(Board);
     })
})