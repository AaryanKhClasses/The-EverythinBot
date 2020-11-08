const Discord = require("discord.js")
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'help',
    description: 'Help Command!',
    cooldown: 10,
    maxArgs: 0,
    callback: (message) => {
        const embed = new Discord.MessageEmbed()
        .setTitle(`${prefix}help Command`)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        .addFields(
            {
                name: 'Global Commands',
                value: 'ping, help, info'
            },
            {
                name: 'Fun',
                value: 'Nothing YET'
            }
        )
        message.channel.send(embed)
    }
}