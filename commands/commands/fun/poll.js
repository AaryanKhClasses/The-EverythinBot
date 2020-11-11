const { prefix } = require('@root/config.json')
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: 'poll',
    description: 'Starts a new Poll!',
    cooldown: 300,
    callback: (message) => {
        let args = message.content.slice(prefix.length).split(' ')
        const pollMessage = args.slice(1).join(' ')
        if(!pollMessage){
            const embed = new MessageEmbed()
            .setTitle(`${prefix}poll Command`)
            .setDescription(
                `**Description:** Starts a new Poll!\n**Cooldown:** 5 minutes\n**Usage:** ${prefix}poll [poll message]\n**Example:** ${prefix}poll This is a tezt poll.`
            )
            .setColor('ORANGE')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            message.channel.send(embed)
        } else if(pollMessage){
            const name = message.content.replace(`${prefix}poll`, '')
            const embed = new MessageEmbed()
            .setDescription(
                `${name}`//\n**Note:** This poll will be deleted in 1 day!`
            )
            .setColor('RANDOM')
            .setFooter(`The EverythinBot | Poll by ${message.author.tag}`)
            .setTimestamp(new Date())
            message.channel.send(embed).then((message) => {
                message.react('👍').then(() => message.react('👎'))
                // const upvoted = message.reactions.cache.get('👍').count
                // const downvoted = message.reactions.cache.get('👎').count
                // setTimeout(message.author.send(upvoted), 1000 * 60 * 60 * 24)
                // message.delete({
                //     timeout: 1000 * 60 * 60 * 24 //1 day
                // })
            })
            message.delete()
            return
        }
    }
}