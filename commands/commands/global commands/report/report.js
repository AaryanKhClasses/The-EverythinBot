global.XMLHttpRequest = require("xhr2");
const reportwebhook = 'https://discord.com/api/webhooks/775984269457489950/1kebVcQfVXOkFtfJ2Hj7fi-kscMa0BX3HwqnJBj8U0YO8iabYxpjp2pkHszCI_PgyFnd'
const { prefix } = require('@root/config.json');
const { MessageEmbed } = require("discord.js");

module.exports = {
    commands: 'report',
    description: 'Report a bug!',
    cooldown: 10,
    callback: (message) => {
        const args = message.content.slice(prefix.length).split(' ')
        if(args[1] == '-i'){
            if(args[3] == '-t'){
                if(args[5] == '-r'){
                    var request = new XMLHttpRequest()
                    request.open('POST', reportwebhook)
                    request.setRequestHeader('Content-type', 'application/json')

                    var params = {
                        username: 'Report',
                        avatar_url: 'https://discordtemplates.me/static/img/icon.png',
                            "embeds": [{
                                "title": "A new Report!",
                                "color": 3447003,
                            "thumbnail": {
                                "url": "https://discordtemplates.me/static/img/icon.png",
                            },
                            "fields": [
                                {
                                    "name": "\nUser Info:",
                                    "value": `\n**User:** <@${message.author.id}>\n**ID:** ${args[2]}\n`,
                                },
                                {
                                    "name": "Report Type:",
                                    "value": `\n**Type:** ${args[4]}\n`,
                                },
                                {
                                    "name": "Report:",
                                    "value": `\n**Report** ${args.slice(6).join(' ')}`,
                                },
                            ],
                            "timestamp": new Date()
                        }]
                    }
                    request.send(JSON.stringify(params))
                    const embed = new MessageEmbed()
                    .setDescription(`Your report is sent successfully. Do ${prefix}info to Join Support Server!`)
                    .setColor('GREEN')
                    .setFooter('The EverythinBot')
                    .setTimestamp(new Date())
                    message.channel.send(embed)
                } else {
                    message.channel.send(`You typed \`${args[5]}\` instead of \`-r\`. Please type \`${prefix}reportinf\` for more info!`)
                }
            } else {
                message.channel.send(`You typed \`${args[3]}\` instead of \`-t\`. Please type \`${prefix}reportinf\` for more info!`)
            }
        } else {
            message.channel.send(`You typed \`${args[1]}\` instead of \`-i\`. Please type \`${prefix}reportinf\` for more info!`)
        }
    }
}