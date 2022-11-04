const Board = require ('./board.model')
const Cheese =  require ('./cheese.model')
const User = require ('./user.model')

User.hasMany(Board)
Board.belongsTo(User)


Board.belongsToMany(Cheese,{through:'Board_Cheese'})
Cheese.belongsToMany(Board,{through:'Board_Cheese'})


async function addData () {
    const user1 = await User.create({name: "user1",
        email: "user1@multiverse.org"})
    const boarduser1 = await Order.bulkCreate([
        {type:'French Board',
        description:"A collection of French cheeses",
        rating:5},
        {type:"Italian Board ",
            description:"A collection of Italian cheeses",
            rating:3}
    ])

    await user1.addOrder(boarduser1)
}



module.exports ={
    Board,
    Cheese,
    User,
    addData
}