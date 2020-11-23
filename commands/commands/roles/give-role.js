const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: ['giverole', 'give-role'],
    cooldown: 5,
    callback: (message) => {
        const member = message.mentions.members.first()
        const rname = message.content.split(' ').splice(2).join(' ')
        const role = message.guild.roles.cache.find(val => val.name === rname)

        if(message.mentions.users.size === 0){
            const embed = new MessageEmbed()
            .setDescription(`<:emojino:779190801598775317> Please mention a user to give role to!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp()
            message.channel.send(embed)
        } else if(!member){
            const embed = new MessageEmbed()
            .setDescription(`<:emojino:779190801598775317> That user doesn't seem valid!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp()
            message.channel.send(embed)
        } else if(!role){
            const embed = new MessageEmbed()
            .setDescription(`<:emojino:779190801598775317> The role - ${rname} - doesn't exist on this server!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp()
            message.channel.send(embed)
        }

        const roleposition = role.position
        const userroleposition = message.member.roles.highest.position

        if(userroleposition <= roleposition){
            const embed = new MessageEmbed()
            .setDescription(`<:emojino:779190801598775317> Your role is lower than the specified role!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp()
            message.channel.send(embed)
        }

        member.roles.add(role).catch(e => console.log(e))
        const sembed = new MessageEmbed()
        .setDescription(`<:emojiyes:779190801392861224> Successfully given role to **${message.mentions.users.first().username}**!`)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp()
        message.channel.send(sembed)
    }
}