const { MessageEmbed, Message } = require("discord.js")

module.exports = (client) => {
    client.on('guildMemberAdd', (member) => {
        // const channelName = member.guild.channels.cache.find(channel => channel.name.includes('mod-logs'))
        // if(!channelName){
        //     return
        // } else if(channelName){
        //     const embed = new MessageEmbed()
        //     .setAuthor(member.user.displayAvatarURL(), '**Member Joined**')
        //     .setDescription('Member Details!')
        //     .setColor('GREEN')
        //     .setFooter('The EverythinBot')
        //     .setTimestamp(new Date())
        //     channelName.send(embed)
        // }
        // message.channel.send('hi')
    })
}