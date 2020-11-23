const { MessageEmbed } = require("discord.js")

const { ballreplies } = require(`@root/json.json`)

module.exports = {
    commands: '8ball',
    cooldown: 5,
    callback: (message, args) => {
        if(!args[0]){
            const embed = new MessageEmbed()
            .setDescription(`**Description:** Ask the bot a question!\n**Cooldown:** 5 seconds\n**Usage:** !8ball (question)\n**Example:** !8ball How is the bot?`)
            .setFooter('The Magical EverythinBot')
            .setColor('ORANGE')
            .setTimestamp(new Date())
            message.channel.send(embed)
        }
        
        const result = Math.floor(Math.random() * ballreplies.length)
        const question = args.slice(0).join(' ')

        const embed = new MessageEmbed()
        .setDescription('Magical 8ball!')
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
        .setColor('RANDOM')
        .addFields(
            {
                name: 'Question: ',
                value: question,
            },
            {
                name: 'Answer: ',
                value: ballreplies[result],
            }
        )
        .setFooter('The Magical EverythinBot')
        .setTimestamp()
        message.channel.send(embed)
        message.delete()
    }
}