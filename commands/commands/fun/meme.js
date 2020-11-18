const Discord = require('discord.js')
const got = require('got')

module.exports = {
    commands: ['meme', 'memes'],
    cooldown: 7,
    callback: (message) => {
        got('https://www.reddit.com/r/meme/random/.json').then((response) => {
            let content = JSON.parse(response.body),
                image = content[0].data.children[0].data.url,
                embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setImage(image)
                .setTimestamp(new Date())
                .setFooter('The EverythinBot | from: r/meme')
            message.channel.send(embed)
        }).catch(console.log)
    }
}