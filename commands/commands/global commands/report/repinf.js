const { MessageEmbed } = require("discord.js")
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'repinf',
    description: 'Help for Report Command!',
    cooldown: 30,
    callback: (message) => {
        const embed = new MessageEmbed()
        .setTitle('The EverythinBot - Report Help!')
        .setDescription('[Join our support server for more help!](https://discord.io/everythinbot)')
        .addFields(
            {
                name: 'Format for sending the report.',
                value: `\`${prefix} report -i\` Your ID \`-t\` Type of Report \`-r\` Your Report`,
            },
            {
                name: 'Definitions of some terms.',
                value: '`-i` is [Your ID](https://cdn.discordapp.com/attachments/775984240319135794/776017046861250580/unknown.png)\n `-t` is the Type Of Report\n`-r` is Your Actual Report(Text)',
            },
            {
                name: 'Examples',
                value: `\`${prefix}report -i\` ID \`-t\` bug \`This is a Bug Report!\`\n\`${prefix}report -i\` ID \`-t\` suggestion \`This is a Suggestion!\``
            }
        )
        .setColor('ORANGE')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        message.channel.send(embed)
    }
}