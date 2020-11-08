const Discord = require("discord.js")
const client = new Discord.Client()
const { prefix } = require('@root/config.json')

function uptime(time) {
    let Seconds = Math.floor(time / 1000)
    const Days = Math.floor(Seconds / 86400)
    Seconds %= 86400
    const Hours = Math.floor(Seconds / 3600)
    Seconds %= 3600
    const Minutes = Math.floor(Seconds / 60)
    const seconds = Math.floor(Seconds % 60)
    return [Days, Hours, Minutes, seconds]
}

module.exports = {
    commands: 'uptime',
    description: 'Showzs Uptime of the Bot!',
    cooldown: 3,
    maxArgs: 0,
    callback: (message) => {
        const Uptime = uptime(client.uptime)
        const embed = new Discord.MessageEmbed()
        .setTitle(`${prefix}uptime Command`)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        .addFields(
            {
                name: 'Uptime',
                value: `${Uptime[0]} days ${Uptime[1]} hours ${Uptime[2]} minutes ${Uptime[3]} seconds`
            }
        )
        message.channel.send(embed)
    }
}