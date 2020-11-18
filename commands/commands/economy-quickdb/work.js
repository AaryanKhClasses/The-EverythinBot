const Discord = require('discord.js')
const db = require('quick.db')
let ms = require('parse-ms')

const workReplies = [
    "You worked at a hamburger stall",
    "You worked as a professional Minecraft Parkourist",
    "You got your montly salary as a school teacher",
    "You worked as a desk cleaner of a taco-burger stall",
    "You got some coins in your bank locker",
    "You worked as a discord bot developer",
    "You found some coins in your cupboard",
    "You worked as a software developer",
    "You got coins from your mother to buy whatever you want",
    "You worked as a car washer"
]

module.exports = {
    commands: 'work',
    callback: async (message) => {
        let pad_zero =  num => (num < 10 ? '0': '') + num
        let cooldown = 1.44e+7

        let min = 100
        let max = 300
        let amount = Math.floor(Math.random() * (max - min + 1)) + min

        let lastWork = await db.get(`lastWork.${message.author.id}`)
        let buck = await db.get(`account.${message.author.id}.balance`)
        try{
            if(lastWork !== null && cooldown - (Date.now() - lastWork) > 0){
                let timeObj = ms(cooldown - (Date.now() - lastWork))

                let hours = pad_zero(timeObj.hours).padStart(2, '0')
                    mins = pad_zero(timeObj.minutes).padStart(2, '0')
                    secs = pad_zero(timeObj.seconds).padStart(2, '0')

                let finalTime = `**${hours}:${mins}:${secs}**`
                const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
                .setDescription(`Sorry! You have already worked. Please wait until ${finalTime} to do work again!`)
                .setColor('RED')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                return message.channel.send(embed)
            } else {
                db.set(`lastWork.${message.author.id}`, Date.now())
                db.add(`account.${message.author.id}.balance`, amount)
                const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
                .setDescription(`${workReplies[Math.floor(Math.random() * workReplies.length)]}! You got ${amount} coins!`)
                .setColor('GREEN')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                return message.channel.send(embed)
                
            }
        } catch(error) {
            console.log(error)
        }
    }
}