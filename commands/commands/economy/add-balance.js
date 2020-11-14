const economy = require('@features/economy.js')
const { prefix } = require('@root/config.json')
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['add-balance', 'addbal'],
    description: 'Adds balance',
    cooldown: 5,
    callback: async(message) => {
        let args = message.content.slice(prefix.length).split(' ')
        if(message.member.hasPermission('ADMINISTRATOR')){
            const mention = message.mentions.users.first()
            if(!mention){
                const embed = new MessageEmbed()
                .setDescription(
                    `**Description:** Adds coins to user balance!\n**Cooldown:** 5 seconds\n**Usage:** ${prefix}addbal [mention]\n**Example:** ${prefix}addbal @AaryanKh#4532`
                )
                .setColor('ORANGE')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                message.channel.send(embed)
                return
            }

            const coins = args[2]
            if(isNaN(coins)){
                const embed = new MessageEmbed()
                .setDescription(`Please specify a valid number of coins!`)
                .setColor('RED')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                message.channel.send(embed)
                return
            }

            const guildId = message.guild.id
            const userId = mention.id
            const newCoins = await economy.addCoins(guildId, userId, coins)
            const embed = new MessageEmbed()
            .setDescription(`You have gave <@${userId}> ${coins} coin(s)! They now have ${newCoins} coin(s)!`)
            .setColor('GREEN')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            message.channel.send(embed)
        }
    }
}