const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: 'add-coins',
    cooldown: 10,
    callback: (message, args, client) => {
        if(message.member.hasPermission('ADMINISTRATOR')){
            let user
        if(message.mentions.users.first()){
            user = message.mentions.users.first()
        } else if(args[1]){
            user = message.guild.members.cache.get(args[0]).user
        } else {
            user = message.author
        }

        if(!user){
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
            .setDescription(`Please specify a person to add coins to!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            return message.channel.send(embed)
        }
        if(user.bot || user === client.user){
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
            .setDescription(`Sorry! You cannot add coins to bots!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            return message.channel.send(embed)
        }

        let amount
        if(args[1]) amount = parseInt(args[1])
        if(!args[1]) amount = parseInt(args[0])
        if(!amount){
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
            .setDescription(`Please specify the number of coins you want to add.`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            return message.channel.send(embed)
        }
        if(isNaN(amount)){
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
            .setDescription(`That is an invaild number of coins.`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            return message.channel.send(embed)
        }
        if(amount < 1){
            const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
            .setDescription(`Sorry! You cannot add less than 1 coins! Why would you wanna do that?`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            return message.channel.send(embed)
        }

        db.add(`account.${message.author.id}.balance`, amount)
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
        .setDescription(`Yay! You have added ${amount} coin(s) to <@${user.id}>. But don't cheat again!`)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        return message.channel.send(embed)
        } else {
            const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            .setDescription(
                `🅾 You dont have the permissions to use this command.`
            )
            message.channel.send(embed)
        }
    }
}