const { MessageEmbed } = require("discord.js")
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'slowmode',
    description: 'Sets slowmode of a particular channel!',
    cooldown: 10,
    callback: (message) => {
        if(message.member.hasPermission('MANAGE_CHANNELS')){
            let args = message.content.slice(prefix.length).split(' ')
            const number = args[1]
            if(!number){
                const embed = new MessageEmbed()
                .setTitle(`${prefix}slowmode Command`)
                .setDescription(`<:emojino:779190801598775317> Please specify the number in seconds to make slowmode`)
                .setColor('RED')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                message.channel.send(embed)
            }else if(number){
                message.channel.setRateLimitPerUser(number)
                const embed = new MessageEmbed()
                .setDescription(
                    `Successfully set the slowmode of the channel to ${number} seconds!`
                )
                .setColor('GREEN')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                message.channel.send(embed).then((message) => {
                    message.delete({
                        timeout: 3000
                    })
                })
                message.delete()
            }
        } else if(!message.member.hasPermission('MANAGE_CHANNELS')){
            const embed = new MessageEmbed()
            .setDescription(`<:emojino:779190801598775317> You do not have Permissions to use this command!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            message.channel.send(embed)
        }
        
    }
}