const { MessageEmbed } = require("discord.js")
const request = require("node-superfetch")

module.exports = {
    commands: ['reddit', 'reddit-user', 'reddit-userinfo'],
    callback: async(message, args) => {
        try{
            let user = args[0]
            if(!user) {
                const embed = new MessageEmbed()
                .setDescription('<:emojino:779190801598775317> Please Enter a Username to get Info of!')
                .setColor('RED')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                return message.channel.send(embed)
            }

            const { body } = await request.get(`https://www.reddit.com/user/${user}/about.json`)
            const { data } = body

            if(data.hide_from_robots){
                const embed = new MessageEmbed()
                .setDescription('Sorry! That user is hidden!')
                .setColor('RED')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                return message.channel.send(embed)
            }
            const embed = new MessageEmbed()
            .setTitle(`/u/${data.name}`)
            .setURL(`https://www.reddit.com/user/${user}`)
            .setThumbnail(data.icon_img.replace(/(amp;)/gi, ''))
            .setColor('GREEN')
            .addField('Username', data.name, true)
            .addField('ID', data.id, true)
            .addField('Karma', Number(data.total_karma), true)
            .addField('Date Created', require('moment').utc(data.creaed_utc * 1000).format("MM/DD/YYYY h:mm A"), true)
            .addField('Premium?', data.is_gold ? "Yes." : "No.", true)
            .addField('Verified?', data.verified ? "Yes." : "No.", true)
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            return message.channel.send(embed)
        } catch(error){
            if(error.status === '404'){
                const embed = new MessageEmbed()
                .setDescription('<:emojino:779190801598775317> There is no such user!')
                .setColor('RED')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                return message.channel.send(embed)
            }
            return console.log(error)
        }
    }
}