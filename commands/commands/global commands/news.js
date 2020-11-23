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
        
        ----- news 3 -----

        const embed = new MessageEmbed()
        .setTitle(`YAY! Version 1.0.2 is here!`)
        .setDescription(`**Version Changes:** With the new v1.0.2 released many new features have been added.\nSome huge Ones as follows:\n**1:** Member Join and Guild Boosts will be shown in a special manner(Support Server Only for now)\n**2:** **__Levelling system__** is still not fixed in this update but __**Economy system**__ have been transfered and is working.\nFor more information do \`!changelog\``)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        message.channel.send(embed)
        
        ----- news 4 -----

        const embed = new MessageEmbed()
        .setTitle('Version 1.0.3 with more Fun')
        .setDescription(`**Fun and Economy Additions:** We have added a whole lot of economy and fun commands so you wont be bored\n**Some of them are as**\n**Fun:** We have added a \`meme\`, a \`google\` command and much more. To know what they do just type in the command!\n**Economy:** Just do \`help\` and find out which!`)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        message.channel.send(embed)
        */

        const embed = new MessageEmbed()
        .setTitle('Huge Changes for b1.1')
        .setDescription(`Finally we are moving out of **__v1.0.x__** to **__beta-1.1__**. For this, we have made a lot of changes!\nNow, every command embed have the <:emojiyes:779190801392861224> and <:emojino:779190801598775317> emojis.\nAlso we have added a lot of day-to-day used commands!\nType in \`!help\` or \`!changelog\` for all information!`)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        message.channel.send(embed)
    }
}