const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: 'news',
    callback: (message) => {
        const embed = new MessageEmbed()
        .setTitle(`YAY! Version 1.0.1 is here!`)
        .setDescription(`**Huge Changes:** Counting won't reset when a member gives a wrong number.\n**For more information do \`!changelog\`**`)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        message.channel.send(embed)
    }
}