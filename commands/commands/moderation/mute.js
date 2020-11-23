const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: 'mute',
    cooldown: 5,
    callback: async(message, args, client) => {
        let reason = args.slice(1).join(' ')
        const user = message.mentions.users.first()
        if(!user){
            const embed = new MessageEmbed()
            .setDescription(`<:emojino:779190801598775317> Please mention someone to mute!`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp()
            message.channel.send(embed)
        }

        let mutedRole = client.guilds.cache.get(message.guild.id).roles.cache.find(val => val.name === 'Muted')
        if(message.author.id === user.id){
            const embed = new MessageEmbed()
            .setDescription(`<:emojino:779190801598775317> You cannot mute yourselves! Why do you wanna do that?`)
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp()
            message.channel.send(embed)
        }

        if(!mutedRole){
            try{
                mutedRole = await message.guild.roles.create({data: {
                    name: 'Muted',
                    color: '#000000',
                    permissions: []
                }})

                message.guild.channels.cache.forEach(async(channel, id) => {
                    await channel.createOverwrite(mutedRole, {
                        SEND_MESSAGES: false,
                        MANAGE_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                })
            }catch(e){
                console.log(e.stack)
            }
        } else if(mutedRole){
            if(reason.length < 1) reason = 'No Reason Supplied!'

            message.guild.member(user).roles.add(mutedRole).then(() => {
                const logembed = new MessageEmbed()
                .setColor('GREEN')
                .setTimestamp()
                .addField('Action:', 'Mute')
                .addField('User:', `${user.tag} (<@${user.id}>)`)
                .addField('Moderator:', `${message.author.tag} (<@${message.author.id}>)`)
                .addField('Reason:', reason)
                .setFooter('The EverythinBot')
                
                let logchannel = message.guild.channels.cache.find(x => x.name = '🟢┃mod-logs')
                message.guild.channels.cache.get(logchannel.id).send(logembed)
            })
        }

    }
}