const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
    commands: 'afk',
    cooldown: 30,
    callback: async(message, args) => {
        const status = new db.table('AFKs')
        let afk = await status.fetch(message.author.id)
        const embed = new MessageEmbed().setColor('GREEN')
        if(!afk){
            embed
            .setDescription(`<@${message.author.id}> I set Your AFK: ${args.join(' ') ? args.join(' '): 'AFK'}`)
            .setAuthor(`${message.author.tag}`, message.member.user.displayAvatarURL())
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            status.set(message.author.id.id, args.join(' ') || 'AFK')
        } else {
            embed
            .setDescription(`Welcome back <@${message.author.id}> I removed Your AFK:`)
            .setAuthor(`${message.author.tag}`, message.member.user.displayAvatarURL())
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            status.delete(message.author.id)
        }

        message.channel.send(embed).then((message) => {
            message.delete({
                timeout: 10000
            })
        })
    }
}

