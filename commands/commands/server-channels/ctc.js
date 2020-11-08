const { MessageEmbed } = require("discord.js")
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'ctc',
    description: 'Create an Uncategorized text channel.',
    cooldown: 10,
    callback: (message) => {
        if
        (
            message.member.hasPermission('MANAGE_CHANNELS') ||
            message.member.hasPermission('ADMINISTRATOR')
        ){
            const name = message.content.replace( '!ctc', '')
            if(!name){
                const embed = new MessageEmbed()
                .setTitle(`${prefix}ctc Command`)
                .setDescription(
                    `**Description:** Creates an uncategorized text channel.\n**Cooldown:** 10 seconds\n**Usage:** !ctc [channel name]\n**Example:** !ctc Test Channel`
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
                .setDescription(`✅ Successfully created channel ${name}!`)
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