const mongo = require('@utils/mongo.js')
const verificationSchema = require('@schemas/verification-channels-schema')

let verificationCache = {}

const fetchData = async(client) => {
    console.log('FETCHING DATA...')
    await mongo().then(async(mongoose) => {
        try{
            const results = await verificationSchema.find({})

            for(const result of results){
                const guild = client.guilds.cache.get(result._id)
                if(guild){
                    const channel = guild.channels.cache.get(result.channelId)
                    if(channel){
                        verificationCache[result.channelId] = result.roleId
                        channel.messages.fetch()
                    }
                }
            }
        } finally{
            mongoose.connection.close()
        }
    })
}

const populateCache = async(client) => {
    verificationCache = {}
    await fetchData(client)

    setTimeout(populateCache, 1000 * 60 * 10) //10 mins
}

module.exports = (client) => {
    populateCache(client)

    client.on('messageReactionAdd', (reaction, user) => {
        const channelId = reaction.message.channel.id
        const roleId = verificationCache[channelId]

        if(roleId){
            const { guild } = reaction.message
            const member = guild.members.cache.get(user.id)
            member.roles.add(roleId)
        }
    })
}

module.exports.fetch = fetchData