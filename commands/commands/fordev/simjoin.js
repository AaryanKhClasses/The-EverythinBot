module.exports = {
    commands: 'simjoin',
    cooldown: 0,
    callback: (message, args, text, client) => {
        client.emit('guildMemberAdd', message.member)
    }
}