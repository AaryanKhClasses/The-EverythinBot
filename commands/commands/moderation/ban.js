const Discord = require("discord.js")
const { prefix } = require('@root/config.json')

module.exports = {
    commands: 'ban',
    description: 'ban someone!',
    cooldown: 10,
    callback: (message) => {
        let args = message.content.slice(prefix.length).split(" ")
        const reason = args.slice(1).join(' ')
        const target = message.mentions.users.first()

        if(message.member.hasPermission('BAN_MEMBERS')){
            if(!target){
                const embed = new Discord.MessageEmbed()
                .setTitle(`${prefix}ban Command`)
                .setColor('ORANGE')
                .setFooter('The EverythinBot')
                .setDescription('<:emojino:779190801598775317> Please mention a member to ban!')
                message.channel.send(embed)
            } else if(target){
                const targetMember = message.guild.members.cache.get(target.id)
                if(targetMember.hasPermission('MANAGE_GUILD') || targetMember.hasPermission('ADMINISTRATOR')){
                    targetMember.ban()
                    const embed = new Discord.MessageEmbed()
                    .setDescription(
                        `<:emojiyes:779190801392861224> <@${message.author.id}> <@${target.id}> was banned! ${reason}`
                    )
                    .setFooter('The EverythinBot')
                    .setTimestamp(new Date())
                    .setColor('GREEN')
                    message.channel.send(embed)
                }else if(!targetMember.hasPermission('MANAGE_GUILD') || !targetMember.hasPermission('ADMINISTRATOR')){
                   console.log('Hello').then((resultMessage) => {
                        const embed = new Discord.MessageEmbed() 
                        .setDescription(
                            `<:emojino:779190801598775317> <@${message.author.id}> <@${target.id}> ia a mod/admin and I cant ban them.`
                        )   
                        .setFooter('The EverythinBot')
                        .setTimestamp(new Date())
                        .setColor('RED')
                        resultMessage.channel.send(embed)
                    })
                }
            }
        } else if(!message.member.hasPermission('BAN_MEMBERS')){
            const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp(new Date())
            .setDescription(
                `<:emojino:779190801598775317> You dont have the permissions to use this command.`
            )
            message.channel.send(embed)
        }
    }
}