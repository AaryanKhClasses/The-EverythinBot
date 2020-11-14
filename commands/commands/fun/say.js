const { MessageEmbed } = require("discord.js")
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'say',
    description: 'Says something!',
    cooldown: 3,
    callback: (message) => {
        const name = message.content.replace('!say', '')
        if(!name){
            const embed = new MessageEmbed()
            .setDescription(
                `**Description:** Says what you say in an embed form!\n**Cooldown:** 3 seconds\n**Usage:** ${prefix}say [text]\n**Example:** ${prefix}say /kill @AaryanKh#4532`
            )
            .setColor('ORANGE')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            message.channel.send(embed)
            return
        } else if(name){
            const embed = new MessageEmbed()
            .setAuthor(
                `${message.author.tag}`,
                message.author.displayAvatarURL())
            .setDescription(`${name}`)
            .setFooter('The EverythinBot')
            .setColor('RANDOM')
            .setTimestamp(new Date())
            message.channel.send(embed)
            message.delete()
        }
    }
}