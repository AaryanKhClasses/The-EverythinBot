const { MessageEmbed } = require('discord.js')
const cheerio = require('cheerio')
const request = require('request')
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'anime',
    description: 'Gives a gif anime',
    cooldown: 5,
    callback: (message) => {
        let args = message.content.slice(prefix.length).split(" ")
        const anime = args[1]

        if(!anime){
            const embed = new MessageEmbed()
            .setTitle(`${prefix}anime Command`)
            .setDescription(
                `**Description:** Returns a GIF image of the requested anime.\n**Cooldown:** 5 seconds\n**Usage:** ${prefix}anime [anime]\n**Example:** ${prefix}anime doraemon`
            )
            .setColor('ORANGE')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            message.channel.send(embed)
        }   else{
                image(message)
                function image(message){
                    var options = {
                        url: 'https://results.dogpile.com/serp?qc=images&q=' + anime,
                        method: 'GET',
                        headers: {
                            'Accept': 'text/html',
                            'User-Agent': 'Chrome'
                        }
                    }
                    request(options, function(error, responseBody){
                        if(error){
                            return
                        }

                        $ = cheerio.load(responseBody)
                        var links = $('.image a.link')
                        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(1).attr('href'))
                        console.log(urls)
                        if(!urls.length){
                            return
                        }
                        message.channel.send(urls[Math.floor(Math.random() * urls.length)])
                })
            }
        }

        
    }
}