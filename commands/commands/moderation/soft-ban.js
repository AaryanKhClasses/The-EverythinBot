const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: ['softban', 'soft-ban'],
    cooldown: 5,
    callback: (message, args, client) => {
        let reason = args.slice(1).join(' ')
        const user = message.mentions.users.first()
        if(!user){
            const embed = new MessageEmbed()
            .setDescription(`<:emojino:779190801598775317> You need to mention someone to soft-ban!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp()
            message.channel.send(embed)
        }
        if(message.mentions.users.first().id === message.author.id){
            const embed = new MessageEmbed()
            .setDescription(`<:emojino:779190801598775317> You cannot soft-ban yourselves! Why do you wanna do that?`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp()
            message.channel.send(embed)
        }

        if(reason.length < 1) reason = 'No reason Supplied!'
        if(!message.guild.member(user).bannable){
            const embed = new MessageEmbed()
            .setDescription(`<:emojino:779190801598775317> The specified user is a mod/admin and i can't ban them!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp()
            message.channel.send(embed)
        } else {
            message.guild.members.ban(user.id, {days:7, reason: reason})
            message.guild.members.unban(user.id, reason).then(() => {
                const logembed = new MessageEmbed()
                .setColor('GREEN')
                .setTimestamp()
                .addField('Action:', 'Soft Ban')
                .addField('User:', `${user.tag} (<@${user.id}>)`)
                .addField('Moderator:', `${message.author.tag} (<@${message.author.id}>)`)
                .addField('Reason:', reason)
                .setFooter('The EverythinBot')

                let logchannel = message.guild.channels.cache.find(x => x.name = '🟢┃mod-logs')
                message.guild.channels.cache.get(logchannel.id).send(logembed)
            })
            const msgembed = new MessageEmbed()
            .setColor('GREEN')
            .setDescription(`<:emojiyes:779190801392861224> Successfully Soft-Banned ${user.tag}`)
            .setFooter('The EverythinBot')
            .setTimestamp()
            message.channel.send(msgembed)
        }
    }
}