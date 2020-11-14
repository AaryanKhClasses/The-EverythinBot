const { prefix } = require('@root/config.json')
const { MessageEmbed } = require('discord.js')

module.exports = {
    commands: ['delete-channel', 'removechannel', 'delchannel', 'dc'],
    description: 'Deletes a channel',
    cooldown: 10,
    callback: (message) => {
        if(message.member.hasPermission('MANAGE_CHANNELS')){
            let args = message.content.slice(prefix.length).split(' ')
            const accepted = args[1]
            if(!accepted) {
                const embed = new MessageEmbed()
                .setDescription(`**Description:** Deletes a channel\n**Cooldown:** 10 seconds\n**Usage:** ${prefix}delete-channel [confirm / deny]\n`)
                .setColor('ORANGE')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                message.channel.send(embed)

            } else if(accepted === 'confirm'){
                message.channel.delete()
                    const embed = new MessageEmbed()
                    .setDescription(`The channel you requested to delete is now deleted!`)
                    .setColor('GREEN')
                    .setFooter('The EverythinBot')
                    .setTimestamp(new Date())
                    message.member.send(embed)
                    
            } else if(accepted === 'deny'){
                message.channel.send('OK!')

            } else {
                const embed = new MessageEmbed()
                .setDescription(`**Description:** Deletes a channel\n**Cooldown:** 10 seconds\n**Usage:** ${prefix}delete-channel [confirm / deny]\n`)
                .setColor('ORANGE')
                .setFooter('The EverythinBot')
                .setTimestamp(new Date())
                message.channel.send(embed)
            }
        } else if(!message.member.hasPermission('MANAGE_CHANNELS')){
            const embed = new MessageEmbed()
            .setDescription(`You do not have Permissions to use this command!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            message.channel.send(embed)
        }
        
    }
}