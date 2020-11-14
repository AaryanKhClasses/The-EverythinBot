const { MessageEmbed } = require('discord.js')
const createCaptcha = require('./make-captcha')
const fs = require('fs').promises

module.exports = (client) => {
    client.on('guildMemberAdd', async member => {
        const captcha = await createCaptcha()
        try {
            const embed = new MessageEmbed()
            .setDescription(
                `You have 60 seconds to solve this captcha.`
            )
            .setColor('RANDOM')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            const msg = await member.send(embed, {
                files: [{
                    attachment: `../../../captcha-imgs/${captcha}.png`,
                    name: `${captcha}.png`
                }]
            })
            try{
                const filter = m => {
                    if(m.author.bot) return
                    if(m.author.id === member.id && m.content === captcha) return true
                    else {
                        const embed = new MessageEmbed()
                        .setDescription(`You have entered an incorrect captcha. Read it again and enter it properly!`)
                        .setColor('RED')
                        .setFooter('The EverythinBot')
                        .setTimestamp(new Date())
                        m.channel.send(embed)
                        return false
                    }
                }

                const response = await msg.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time']})
                if(response){
                    const embed = new MessageEmbed()
                    .setDescription('Yay! You have Verified Yourselves! Now you can access the server!')
                    .setColor('GREEN')
                    .setFooter('The EverythinBot')
                    .setTimestamp(new Date())
                    await msg.channel.send(embed)
                    await member.roles.add('774932067615899659')
                    await fs.unlink(`../../../captcha-imgs/${captcha}.png`)
                    .catch(err => console.log(err))
                }
            } catch(err) {
                console.log(err)
                const embed = new MessageEmbed()
                .setDescription(`You didn't solve the captcha in time! You have been kicked from the server`)
                .setColor('RED')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                await msg.channel.send(embed)
                await member.kick()
                await fs.unlink(`../../../captcha-imgs/${captcha}.png`)
                .catch(err => console.log(err))
            }
        } catch(err){
            console.log(err)
        }
    })
}