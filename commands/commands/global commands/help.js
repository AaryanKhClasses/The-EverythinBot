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
                value: 'ping, help, info, uptime, changelog'
            },
            {
                name: 'Fun',
                value: 'anime, poll',
            },
            {
                name: 'Server-Channels',
                value: 'ctc, cvc, cct, cc, set-verification, slowmode',
            },
            {
                name: 'Moderation',
                value: 'kick'
            }
        )
        .setDescription('**NOTE:** If some of the commands are not working, check the changelog for info about which commands are not working.')
        message.channel.send(embed)
    }
}