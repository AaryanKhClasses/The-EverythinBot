const { MessageEmbed } = require("discord.js")

module.exports = (client) => {
    client.on('guildMemberAdd', (member) => {
        const channelId = '774930646346366987'
        const channelName = member.guild.channels.cache.find(ch => ch.name.includes('welcome'))
        if(!channelName){
            return
        } else if(channelName){
            const embed = new MessageEmbed()
            .setDescription(`Welcome to **${member.guild.name}**, <@!${member.user.id}> Please read the rules of the server!`)
            .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
            .setColor('GREEN')
            .setFooter(`The EverythinBot of ${member.guild.name}`)
            .setTimestamp(new Date())
            // client.channels.cache.get(channelName).send(embed)
            client.channels.cache.get(channelId).send(embed)
        }
    })
}