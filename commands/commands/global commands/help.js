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
                name: 'Global Commands[6]',
                value: 'ping, help, info, uptime, changelog, news'
            },
            {
                name: 'Fun[10]',
                value: 'poll, say, meme, reddit, google, weather, math, 8ball, urban',
            },
            {
                name: 'Utility[7]',
                value: 'ctc, cvc, cct, cc, set-verification, slowmode, delete-channel',
            },
            {
                name: 'Moderation[3]',
                value: 'kick, ban, whois'
            },
            {
                name: 'Report[2]',
                value: 'report, repinf'
            },
            {
                name: 'Economy[9]',
                value: 'balance, daily, gamble, pay, leaderboard, add-coins, remove-coins, work, crime'
            },
            {
                name: 'Roles[2]',
                value: 'give-role, remove-role'
            },
            {
                name: 'For complete Command Information',
                value: '[Visit the official Command List and Help]'
            }
        )
        .setDescription('**NOTE:** If some of the commands are not working, check the changelog for info about which commands are not working.')
        message.channel.send(embed)
    }
}