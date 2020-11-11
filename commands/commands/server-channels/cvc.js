const { MessageEmbed } = require("discord.js")
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'cvc',
    description: 'Create an Uncategorized voice channel.',
    cooldown: 10,
    callback: (message) => {
        if
        (
            message.member.hasPermission('MANAGE_CHANNELS') ||
            message.member.hasPermission('ADMINISTRATOR')
        ){
            const name = message.content.replace( '!cvc', '')
            if(!name){
                const embed = new MessageEmbed()
                .setTitle(`${prefix}cvc Command`)
                .setDescription(
                    `**Description:** Creates an uncategorized voice channel.\n**Cooldown:** 10 seconds\n**Usage:** !cvc [channel name]\n**Example:** !cvc Test Channel`
                )
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                .setColor('ORANGE')
                message.channel.send(embed)
            } else if(name){
                message.guild.channels
                .create(name, {
                    type: 'text',
                })
                .then((channel) => {
                    const categoryId = '' 
                    channel.setParent(categoryId)
                })
            
                const embed = new MessageEmbed()
                .setDescription(`✅ Successfully created voice channel ${name}!`)
                .setFooter('The EverythinBot')
                .setColor('GREEN')
                .setTimestamp(new Date())
                message.channel.send(embed)
            }
        }else if
        (
            !message.member.hasPermission('MANAGE_CHANNELS') ||
            !message.member.hasPermission('ADMINISTRATOR')
        ) {
            const embed = new MessageEmbed()
            .setDescription(
                `🅾 You do not have the permission to use this command!`
            )
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            message.channel.send(embed)
        }    
    },
}