const Discord = require("discord.js")
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'kick',
    description: 'Kick someone!',
    cooldown: 10,
    callback: (message) => {
        let args = message.content.slice(prefix.length).split(" ")
        const reason = args.slice(1).join(' ')
        const target = message.mentions.users.first()

        if(message.member.hasPermission('KICK_MEMBERS')){
            if(!target){
                const embed = new Discord.MessageEmbed()
                .setTitle(`${prefix}kick Command`)
                    .setColor('ORANGE')
                .setFooter('The EverythinBot')
                .setDescription(
                    `**Description:** Kicks a member\n**Cooldown:** 3 seconds\n**Usage:** !kick [user] (reason)\n**Example:** !kick @AaryanKh Get Out!`
                )
                message.channel.send(embed)
            } else if(target){
                const targetMember = message.guild.members.cache.get(target.id)
                if(targetMember.hasPermission('MANAGE_GUILD') || targetMember.hasPermission('ADMINISTRATOR')){
                    targetMember.kick()
                    const embed = new Discord.MessageEmbed()
                    .setDescription(
                        `✅ <@${message.author.id}> <@${target.id}> was Kicked! ${reason}`
                    )
                    .setFooter('The EverythinBot')
                    .setTimestamp(new Date())
                    .setColor('GREEN')
                    message.channel.send(embed)
                }else if(!targetMember.hasPermission('MANAGE_GUILD') || !targetMember.hasPermission('ADMINISTRATOR')){
                   console.log('Hello').then((resultMessage) => {
                        const embed = new Discord.MessageEmbed()
                        .setDescription(
                            `🅾 <@${message.author.id}> <@${target.id}> ia a mod/admin and I cant kick them.`
                        )   
                        .setFooter('The EverythinBot')
                        .setTimestamp(new Date())
                        .setColor('RED')
                        resultMessage.channel.send(embed)
                    })
                }
            }
        } else if(!message.member.hasPermission('KICK_MEMBERS')){
            const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            .setDescription(
                `🅾 You dont have the permissions to use this command.`
            )
            message.channel.send(embed)
        }
    }
}