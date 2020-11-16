const { MessageEmbed } = require("discord.js")

module.exports = (client) => {
    client.on('guildMemberUpdate', async(oldMember, newMember) => {
        if(!oldMember.premiumSince && newMember.premiumSince){
            const embed = new MessageEmbed()
            .setAuthor('Server Boosted', newMember.author.displayAvatarURL())
            .setDescription(`WOW! <@${newMember.user.id}> just boosted the server! Thank You for the boost!`)
            .setColor('GREEN')
            .setFooter(`The EverythinBot of ${newMember.guild.name}`)
            .setTimestamp(new Date())
            return client.channels.cache.get('774930646346366987').send(embed)
        }   
    })
}