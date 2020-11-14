const { MessageEmbed, MessageAttachment } = require("discord.js")
const { prefix } = require('@root/config.json')
const Canvas = require('canvas')
const path = require('path')

module.exports = {
    commands: 'twitter-say',
    description: 'Twitter Says!',
    cooldown: 10,
    callback: async(message) => {
        const name = message.content.replace('!twitter-say', '')
        if(!name){
            const embed = new MessageEmbed()
            .setDescription(
                `**Description:** Sends a message in a twitter post form!\n**Cooldown:** 10 seconds\n**Usage:** ${prefix}twitter-say [text]\n**Example:** ${prefix}twitter-say Hi Says @AaryanKh#4532!`
            )
            .setColor('ORANGE')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            message.channel.send(embed)
        } else if(name){
            const canvas = Canvas.createCanvas(1024, 512)
            const ctx = canvas.getContext('2d')

            const background = await Canvas.loadImage(
                path.join(__dirname, '../../../blank-post.png')
            )
            let x = 0
            let y = 0
            ctx.drawImage(background, x, y)

            const pfp = await Canvas.loadImage(
                message.member.user.displayAvatarURL({
                    format: 'png',
                })
            )
            x = 25
            y = 25
            ctx.drawImage(pfp, x, y)

            ctx.fillStyle = '#ffffff'
            ctx.font = '100px - sans-serif'
            let text = `jphjbhb`
            x = canvas.width / 2 - ctx.measureText(text).width / 2
            ctx.fillText(text, x, 100 + pfp.height)

            const attachment = new MessageAttachment(canvas.toBuffer())
            message.channel.send('', attachment)
        }
    }
}