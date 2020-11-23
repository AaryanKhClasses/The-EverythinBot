const Discord = require('discord.js')
const weather = require('weather-js')

module.exports = {
    commands: 'weather',
    cooldown: 10,
    callback: async(message, args) => {
        let city = args.join(' ')
        let degreetype = 'C'

        await weather.find({search: city, degreeType: degreetype}, function(err, result) {
            if(!city) {
                const embed = new Discord.MessageEmbed()
                .setDescription(`<:emojino:779190801598775317> Please insert the name of the city that you want to look weather of!`)
                .setColor('RED')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                return message.channel.send(embed)
            }

            if(err || result === undefined || result.length === 0){
                const embed = new Discord.MessageEmbed()
                .setDescription(`<:emojino:779190801598775317> Unknown City! Please insert a valid city name!`)
                .setColor('RED')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                return message.channel.send(embed)
            }

            let current = result[0].current
            let location = result[0].location

            const embed = new Discord.MessageEmbed()
            .setAuthor(current.observationPoint)
            .setDescription(`> ${current.skytext}`)
            .setThumbnail(current.imageUrl)
            .setTimestamp(new Date())
            .setColor('GREEN')

            embed.addField('Latitude', location.lat, true)
            embed.addField('Longitude', location.long, true)
            embed.addField('Feels like', `${current.feelslike}⁰`, true)
            embed.addField('Degree Type', location.degreetype, true)
            embed.addField('Winds', current.winddisplay, true)
            embed.addField('Humidity', `${current.humidity}%`, true)
            embed.addField('Timezone', `GMT ${location.timezone}`, true)
            embed.addField('Temprature', `${current.temperature}⁰ Degrees`)
            embed.addField('Observation Time', current.observationtime, true)

            return message.channel.send(embed)
        })
    }
}