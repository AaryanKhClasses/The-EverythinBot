const { MessageEmbed } = require("discord.js")
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'cct',
    description: 'Create an Uncategorized category.',
    cooldown: 10,
    callback: (message) => {
        if
        (
            message.member.hasPermission('MANAGE_CHANNELS') ||
            message.member.hasPermission('ADMINISTRATOR')
        ){
            const name = message.content.replace( '!cct', '')
            if(!name){
                const embed = new MessageEmbed()
                .setTitle(`${prefix}cct Command`)
                .setDescription(`<:emojino:779190801598775317> Please give the name to make a category!`)
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                .setColor('RED')
                message.channel.send(embed)
            } else if(name){
                message.guild.channels
                .create(name, {
                    type: 'category',
                })
                .then((channel) => {
                    const categoryId = '' 
                    channel.setParent(categoryId)
                })
            
                const embed = new MessageEmbed()
                .setDescription(`✅ Successfully created category ${name}!`)
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
                `<:emojino:779190801598775317> You do not have the permission to use this command!`
            )
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            message.channel.send(embed)
        }    
    },
}