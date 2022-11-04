const {User,Board, Cheese} = require ('../models')
const db = require('./db')

async function seed () {

    // drops and creates table in db
    await db.sync ({force : true})


    const user1 = await User.create({name: "user1",
        email: "user1@multiverse.org"})
    const user2 = await User.create({name: "user2",
        email: "user2@multiverse.org"})

    const boarduser1 = await Board.bulkCreate([
        {type:'French Board',
        description:"A collection of French cheeses",
        rating:5},
        {type:"Italian Board ",
            description:"A collection of Italian cheeses",
            rating:3}
    ])

    const cheeses = await Cheese.bulkCreate ([
        {title: 'Parmesan',
    description:"The flavor power of parmesan can take a savory dish from acceptable to amazing with a dusting of this delicious cheese. Lots of words are used to describe parmesan: rich, tangy, nutty, sharp, complex, fruity, and bold to name a few. It has a somewhat gritty texture and a strong umami taste."},
        {title: 'Camembert',
    description:"Camembert cheese, classic cow's-milk cheese of Normandy, named for a village in that region; its characteristic creamy, ivory-coloured interior and downy white surface, resembling that of Brie, result from the Penicillium camemberti mold with which the curd is treated."},
    {title: 'Comte',
    description:"It is a semi-hard cheese, pale yellow in color, with a texture that ranges from open, supple, and grainy for younger cheeses to dense, firm, and crystalline for more aged cheeses. When aged, its flavor is nutty, smoky, fruity and sweet, while the younger cheeses are more milky and fresh tasting"},
    {title: 'Mozzarella',
    description:"Mozzarella is a plastic or stretched-curd cheese; the curd is mixed with heated whey and stretched and kneaded until it attains a smooth, pliable consistency. It is then molded into spheres or ovals and stored in water to keep it moist."},
    
    ])

    await user1.addBoard(boarduser1)


    await cheeses[0].addBoard(boarduser1[1])
    await cheeses[1].addBoard(boarduser1[0])
    await cheeses[2].addBoard(boarduser1[0])
    await cheeses[3].addBoard(boarduser1[1])
}





seed()