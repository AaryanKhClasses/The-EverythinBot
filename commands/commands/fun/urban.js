const { MessageEmbed } = require("discord.js")
const urban = require('urban')

module.exports = {
    commands: ['urban', 'define'],
    cooldown: 10,
    callback: (message, args) => {
        if(args.length < 1){
            const embed = new MessageEmbed()
            .setDescription(`<:emojino:779190801598775317> Please specify a word to define!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp()
            message.channel.send(embed)
        }
        const word = args.join(' ')

        urban(word).first(json => {
            if(!json){
                const embed = new MessageEmbed()
                .setDescription(`<:emojino:779190801598775317> Your specified word doesn't exist! Check your word and correct the typo!`)
                .setColor('RED')
                .setFooter('The EverythinBot')
                .setTimestamp()
                message.channel.send(embed)
            }

            const newstr = json.definition.match(/(.|[\r\n]){1,2040}/g)
            if(newstr.length >= 2){
                const def = new MessageEmbed()
                .setTitle(json.word)
                .setDescription(newstr[0] + '...')
                .addField('Upvotes', json.thumbs_up, true)
                .addField('Downvotes', json.thumbs_down, true)
                .setColor('GREEN')
                .setFooter(`The EverythinBot | Definition by ${json.author}`)
                .setTimestamp()
                message.channel.send(def)
            } else {
                const def = new MessageEmbed()
                .setTitle(json.word)
                .setDescription(json.definition)
                .addField('Upvotes', json.thumbs_up, true)
                .addField('Downvotes', json.thumbs_down, true)
                .setColor('GREEN')
                .setFooter(`The EverythinBot | Definition by ${json.author}`)
                .setTimestamp()
                message.channel.send(def)
            }
        })
    }
}