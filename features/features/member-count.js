module.exports = (client, message) => {
    return
    const channelName = message.guild.channels.cache.name.startsWith('Members:')
    if(!channelName){
        message.guild.channels
        .create('Members:', { 
            type: 'text', 
        }).then((channelO) => {
            const categoryId = ''
            channelO.setParent(categoryId)
        })
    } else {
            const updateMembers = (guild) => {
            const channel = guild.channels.cache.get(channelName)
            if(channel){
                channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
            }
        }   

        client.on('guildMemberAdd', (member) => updateMembers(member.guild))
        client.on('guildMemberRemove', (member) => updateMembers(member.guild))

        const guild = client.guilds.cache.get('774930645888794625') //guildid
        // const guild = client.guilds.cache.get('766247382361964554') //guildid
        // const guild = client.guilds.cache.id
        updateMembers(guild)
    }
} 