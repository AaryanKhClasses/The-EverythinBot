const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: 'news',
    callback: (message) => {
        /* 
        ----- news 1 -----
        const embed = new MessageEmbed()
        .setTitle(`YAY! Version 1.0.1 is here!`)
        .setDescription(`**Huge Changes:** Counting won't reset when a member gives a wrong number.\n**For more information do \`!changelog\`**`)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        message.channel.send(embed)

        ----- news 2 -----

        const embed = new MessageEmbed()
        .setTitle(`Economy and Levelling System won't work for some time`)
        .setDescription(`**DB Changes:** We are changing our database servers for **Economy and Levelling Systems** from MongoDB to Quick.DB so the those features will be down for a while\nThank you`)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        message.channel.send(embed)
        */
        const embed = new MessageEmbed()
        .setTitle(`YAY! Version 1.0.2 is here!`)
        .setDescription(`**Version Changes:** With the new v1.0.2 released many new features have been added.\nSome huge Ones as follows:\n**1:** Member Join and Guild Boosts will be shown in a special manner(Support Server Only for now)\n**2:** **__Levelling system__** is still not fixed in this update but __**Economy system**__ have been transfered and is working.\nFor more information do \`!changelog\``)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        message.channel.send(embed)
    }
}