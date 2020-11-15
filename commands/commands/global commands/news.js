const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: 'news',
    callback: (message) => {
        /* news 1
        const embed = new MessageEmbed()
        .setTitle(`YAY! Version 1.0.1 is here!`)
        .setDescription(`**Huge Changes:** Counting won't reset when a member gives a wrong number.\n**For more information do \`!changelog\`**`)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        message.channel.send(embed) */
        const embed = new MessageEmbed()
        .setTitle(`Economy and Levelling System won't work for some time`)
        .setDescription(`**DB Changes:** We are changing our database servers for **Economy and Levelling Systems** from MongoDB to Quick.DB so the those features will be down for a while\nThank you`)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        message.channel.send(embed)
    }
}