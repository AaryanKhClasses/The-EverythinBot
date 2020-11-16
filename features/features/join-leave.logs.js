const Discord = require('discord.js')

module.exports = (client) => {
    const channelId = '774942185183248384'

    client.on('guildMemberAdd', (member) => {
        if(!channelId){
            return
        }else if(channelId){
            const embed = new Discord.MessageEmbed()
            .setAuthor('Member Joined', member.user.displayAvatarURL())
            .addFields(
                {
                    name: 'Member Joined Date',
                    value: member.user.createdAt,
                },
                {
                    name: 'Member ID',
                    value: member.user.id,
                }
            )
            .setDescription(`<@${member.user.id}> ${member.user.tag}`)
            .setColor('GREEN')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            client.channels.cache.get(channelId).send(embed)
        }
    })

    client.on('guildMemberRemove', (member) => {
        if(!channelId){
            return
        }else if(channelId){
            const embed = new Discord.MessageEmbed()
            .setAuthor('Member Left', member.user.displayAvatarURL())
            .addFields(
                {
                    name: 'Member ID',
                    value: member.user.id,
                },
                {
                    name: 'Member Roles',
                    value: member.roles ? member.roles.cache.map(r => `${r}`).join(' ') : "",
                }
            )
            .setDescription(`<@${member.user.id}> ${member.user.tag}`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            client.channels.cache.get(channelId).send(embed)
        }
    })
}