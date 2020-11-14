const { prefix } = require('@commands/set-prefix')
const economy = require('@features/economy')
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['balance', 'bal'],
    description: 'Gets a user Balance!',
    cooldown: 3,
    callback: async(message) => {
        const target = message.mentions.users.first() || message.author
        const guildId = message.guild.id
        const userId = target.id
        const coins = await economy.getCoins(guildId, userId)
        const embed = new MessageEmbed()
        .setDescription(`The mentioned user have ${coins} coins!`)
        .setColor('GREEN')
        .setFooter('The EverythinBot')
        .setTimestamp(new Date())
        message.channel.send(embed)
    }
}