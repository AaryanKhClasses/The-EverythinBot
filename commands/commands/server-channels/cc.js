const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: ['cc', 'clearchannel'],
    description: 'Clears a channel',
    cooldown: 3,
    callback: (message) => {
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
                const embed = new MessageEmbed()
                .setDescription(
                    `✅ Cleared the channel messages.`
                )
                .setColor('GREEN')
                .setFooter(`The EverythinBot`)
                .setTimestamp(new Date())
                message.channel.send(embed).then((message) => {
                    message.delete({
                        timeout: 4000
                    })
                })
            })
        } else if(message.member.hasPermission('MANAGE_MESSAGES')){
            const embed = new MessageEmbed()
            .setDescription(
                `🅾 ${message.member.id}, You do not have the permissions to use this command.`
            )
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            message.channel.send(embed)
        }
    }
}