const { MessageEmbed } = require("discord.js")
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'slowmode',
    description: 'Sets slowmode of a particular channel!',
    cooldown: 10,
    callback: (message) => {
        let args = message.content.slice(prefix.length).split(' ')
        const number = args[1]
        if(!number){
            const embed = new MessageEmbed()
            .setTitle(`${prefix}slowmode Command`)
            .setDescription(
                `**Description:** Sets the slowmode of a particular channel\n**Cooldown:** 10 seconds\n**Usage:** ${prefix}slowmode [slowmode number]\n**Example:** ${prefix}slowmode 15`
            )
            .setColor('ORANGE')
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
    }
}