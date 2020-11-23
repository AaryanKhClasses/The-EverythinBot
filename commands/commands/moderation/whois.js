const { MessageEmbed, MessageAttachment } = require("discord.js")

module.exports = {
    commands: ['whois', 'userinfo'],
    cooldown: 10,
    callback: (message) => {
        const target = message.mentions.members.first()
        if(!target){

            const embed = new MessageEmbed()
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
            .setDescription(`<@${message.author.id}>`)
            .setThumbnail(message.author.displayAvatarURL())
            .addFields(
                {
                    name: 'Joined',
                    value: message.guild.member(message.author).joinedAt,
                },
                {
                    name: 'Registered',
                    value: message.author.createdAt,
                },
                {
                    name: 'Roles',
                    value: message.member.roles ? message.member.roles.cache.map(r => `${r}`).join(' ') : '',
                },
                {
                    name: `Permissions`,
                    value: message.member.permissions.toArray().join(`, `).replace(/_/g, ' '), 
                },
                {
                    name: 'Highest Role',
                    value: message.guild.member(message.author).roles.highest.name,
                }
            )
            .setColor(message.member.roles.highest.color)
            .setFooter(`The EverythinBot | ID: ${message.author.id}`)
            .setTimestamp(new Date())
            message.channel.send(embed)
        } else if(target){
            const embed = new MessageEmbed()
            .setAuthor(`${target.user.tag}`, target.user.displayAvatarURL())
            .setThumbnail(target.user.displayAvatarURL())
            .setDescription(`<@${target.id}>`)
            .addFields(
                {
                    name: 'Joined',
                    value: target.joinedAt
                },
                {
                    name: 'Registered',
                    value: target.user.createdAt,
                },
                {
                    name: 'Roles',
                    value: target.roles ? target.roles.cache.map(r => `${r}`).join(' ') : '',
                },
                {
                    name: `Permissions`,
                    value: target.permissions.toArray().join(' , ').replace(/_/g, ' '),
                },
                {
                    name: 'Highest Role',
                    value: target.roles.highest.name,
                }
            )
            .setColor(target.roles.highest.color)
            .setFooter(`The EverythinBot | ID: ${target.id}`)
            .setTimestamp(new Date())
            message.channel.send(embed)
        }
    }
}