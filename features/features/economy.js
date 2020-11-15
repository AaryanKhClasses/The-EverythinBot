/*
const mongo = require('@utils/mongo.js')
const profileSchema = require('@schemas/profile-schema.js')
const coinsCache = {}

module.exports = (client) => {
    client.on('message', (message) => {
        const { guild, member } = message
        addCoins(guild.id, member.id, 23, message)
    })
}

const addCoins = async(guildId, userId, coins, message) => {
    return await mongo().then(async(mongoose) => {
        try{
            console.log('Running findOneAndUpdate()')
            const result = await profileSchema.findOneAndUpdate(
                {
                    guildId,
                    userId,
                },
                {
                    guildId,
                    userId,
                    $inc: {
                        coins,
                    },
                },
                {
                    upsert: true,
                    new: true,
                }
            )
            console.log('RESULT: ', result)
            coinsCache[`${guildId}-${userId}`] = result.coins
            return result.coins
        } finally {
            mongoose.connection.close()
        }
    })
}

module.exports.getCoins = async(guildId, userId) => {
    const cacheValue = coinsCache[`${guildId}-${userId}`]
    if(cacheValue){
        return cacheValue
    }

    return await mongo().then(async(mongoose) => {
        try{
            console.log('Running findOne()')
            const result = await profileSchema.findOne({
                guildId,
                userId,
            })
            console.log('RESULT: ', result)

            let coins = 0
            if(result){
                coins = result.coins
            } else {
                console.log('Inserting a Document')
                await new profileSchema({
                    guildId,
                    userId,
                    coins,
                }).save()
            }
            coinsCache[`${guildId}-${userId}`]
            return coins
        } finally {
            mongoose.connection.close()
        }
    })
}

module.exports.addCoins = addCoins
*/
module.exports = (client) => {}