const mongo = require('@utils/mongo.js')
const profileSchema = require('@schemas/profile-schema')
const { MessageEmbed } = require('discord.js')

module.exports = (client) => {
    client.on('message', (message) => {
        const { guild, member } = message
        addXP(guild.id, member.id, 23, message)
    })
}

const getNeededXP = (level) => level * level * 100
const addXP = async(guildId, userId, xpToAdd, message) => {
    await mongo().then(async(mongoose) => {
        try{
            const result = await profileSchema.findOneAndUpdate(
                {
                    guildId,
                    userId,
                },
                {
                    guildId,
                    userId,
                    $inc: {
                        xp: xpToAdd,
                    },
                },
                {
                    upsert: true,
                    new: true
                }
            )

            let { xp, level } = result
            const needed = getNeededXP(level)

            if(xp >= needed){
                ++level
                xp -= needed
                const embed = new MessageEmbed()
                .setDescription(`<@${message.member.id}>You are now ${level} with ${xp} experience! You now need ${getNeededXP(level)} XP to level up again!`)
                .setColor('GREEN')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                message.channel.send(embed)

                await profileSchema.updateOne(
                    {
                        guildId,
                        userId
                    },
                    {
                        level,
                        xp,
                    }
                )
            }
        } finally {
            mongoose.connection.close()
        }
    })
}

module.exports.addXP = addXP