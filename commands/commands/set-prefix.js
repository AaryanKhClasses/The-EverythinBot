const mongo = require('@utils/mongo.js')
const commandPrefixSchema = require('@schemas/command-prefix-schema')
const commandBase = require('@root/commands/command-base')
const { MessageEmbed } = require('discord.js')
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'set-prefix',
    description: 'Sets guild Prefix!',
    cooldown: 60,
    callback: async(message, arguments) => {
        if(message.member.hasPermission('ADMINISTRATOR')){
            if(!arguments[0]){
                const embed = new MessageEmbed()
                .setDescription(`**Description:** Sets the guild Prefix for the bot\n**Cooldown:** 60 seconds\n**Usage:** ${prefix}set-prefix [prefix]\n**Example:** ${prefix}set-prefix .`)
                .setColor('GREEN')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                message.channel.send(embed)
            } else if(arguments[0]){
                await mongo().then(async(mongoose) => {
                    try{
                        const guildId = message.guild.id
                        const newPrefix = arguments[0]
        
                        await commandPrefixSchema.findOneAndUpdate(
                            {
                                _id: guildId,
                            },
                            {
                                _id: guildId,
                                newPrefix,
                            },
                            {
                                upsert: true,
                            }
                        )
                        const embed = new MessageEmbed()
                        .setDescription(`The Prefix of this server is now **${newPrefix}**`)
                        .setColor('GREEN')
                        .setFooter('The EverythinBot')
                        .setTimestamp(new Date())
                        message.channel.send(embed)
                        commandBase.updateCache(guildId, newPrefix)
                    } finally {
                        mongoose.connection.close()
                    }
                })
            }
        } else if(!message.member.hasPermission('ADMINISTRATOR')){
            const embed = new MessageEmbed()
            .setDescription(`You don't have permissions to use this command!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            message.channel.send(embed)
        }
    }
}