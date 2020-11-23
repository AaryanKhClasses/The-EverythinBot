const Discord = require('discord.js')
const request = require('node-superfetch')

module.exports = {
    commands: ['google', 'search'],
    cooldown: 10,
    callback: async(message, args) => {
        let googlekey = 'AIzaSyCcw7xOevdGc5tngrmQHxIGx7gSnkXDn-8'
        let csx = '7b606c587eae4bc38'
        let query = args.join(' ')
        let result

        if(!query){
            const embed = new Discord.MessageEmbed()
            .setDescription(`<:emojino:779190801598775317> Please enter a query to search!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            return message.channel.send(embed)
        }

        href = await search(query)
        if(!href){
            const embed = new Discord.MessageEmbed()
            .setDescription(`<:emojino:779190801598775317> Unknown search(href)!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            return message.channel.send(embed)
        }

        const embed = new Discord.MessageEmbed()
        .setTitle(href.title)
        .setDescription(href.snippet)
        .setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src : null)
        .setURL(href.link)
        .setColor('GREEN')
        .setFooter('The EverythinBot | Powered by Google')
        .setTimestamp(new Date())
        return message.channel.send(embed)

        async function search(query) {
            const { body } = await request.get('https://www.googleapis.com/customsearch/v1').query({
                key: googlekey, cx: csx, safe: 'off', q: query
            })

            if(!body.items) return null
            return body.items[0]
        }
    }
}