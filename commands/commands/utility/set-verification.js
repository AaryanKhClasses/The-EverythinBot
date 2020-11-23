const Discord = require('discord.js')
const mongo = require('@utils/mongo.js')
const verificationSchema = require('@schemas/verification-channels-schema.js')
const { fetch } = require('@features/verification-channels.js')
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'set-verification',
    description: 'Sets the verification channel.',
    cooldown: 5,
    callback: (message, args) => {
        // let args = message.content.slice(prefix.length).split(" ")
        const seconds = 7

        if(args.length !== 2){
            const embed = new Discord.MessageEmbed()
            .setTitle(`${prefix}set-verification Command`)
            .setDescription(
                `**Description:** Sets the verification channel.\n**Cooldown:** 5 seconds\n**Usage:** ${prefix}set-verification [emoji] [roleId]\n**Example:** ${prefix}set-verification ✅ 774932067615899659\n**Note:** This roleId will not work for you.`
            )
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            message.channel.send(embed)
            .then((message) => {
                message.delete({
                    timeout: 1000 * seconds
                })
            })

            message.delete()
            return
        }

        const { guild, channel } = message

        let emoji = args[0]
        if(emoji.includes(':')){
            const split = emoji.split(':')
            const emojiName = split[1]

            emoji = guild.emojis.cache.find((emoji) => {
                return emoji.name === emojiName
            })
        }

        const roleId = args[1]
        const role = guild.roles.cache.get(roleId)

        if(!role){
            const embed = new Discord.MessageEmbed()
            .setDescription(
                `🅾 Cannot find the roleId of ${roleId}`
            )
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            message.channel.send(embed).then((message) => {
                message.delete({
                    timeout: 1000 * seconds
                })
            })

            message.delete()
            return
        }

        message.delete().then(() => {
            channel.messages.fetch({ limit: 1 }).then(async(results) => {
                const firstMessage = results.first()
                if(!firstMessage){
                    const embed = new Discord.MessageEmbed()
                    .setDescription(
                        `🅾 There is no message to react to. Please post a message above this.`
                    )
                    .setColor('RED')
                    .setFooter('The EverythinBot')
                    .setTimestamp(new Date())
                    channel.send(embed).then((message) => {
                        message.delete({
                            timeout: 1000 * seconds
                        })
                    })
                    message.delete()
                    return
                }

                firstMessage.react(emoji)

                await mongo().then(async(mongoose) => {
                    try{   
                        await verificationSchema.findOneAndUpdate(
                            {
                                _id: guild.id,
                            },
                            {
                                _id: guild.id,
                                channelId: channel.id,
                                roleId,
                            },
                            {}
                        )
                    }finally{
                        mongoose.connection.close()
                    }
                })
                await fetch()
            })
        })
    }
}