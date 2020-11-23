const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: ['balance', 'bal'],
    cooldown: 10,
    callback: (message, args, client) => {
        let user
        if(message.mentions.users.first()){
            user = message.mentions.users.first()
        } else if(args[0]){
            user = message.guild.members.cache.get(args[0]).user
        } else {
            user = message.author
        }

        if(user.bot || user === client.user){
            const embed = new Discord.MessageEmbed()
            .setDescription(`<:emojino:779190801598775317> Sorry! The mentioned user is a bot and bots cannot have money!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            return message.channel.send(embed)
        }

        let balance = db.get(`account.${user.id}.balance`)
        if(!balance) balance = 0
        else balance = balance

        const embed = new Discord.MessageEmbed()
        .setTitle(`Balance for ${user.tag}`)
        .setDescription(`<:emojiyes:779190801392861224> **Balance:** ${(balance).toLocaleString()} coins`)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        return message.channel.send(embed)
    }
}