let count = 0
let timeout

module.exports = (client) => {
    client.on('message', (message) => {
        if(message.channel.name.includes('counting')){
            if(message.member.user.bot) return
            if(Number(message.content) === count + 1){
                count++
                if(timeout) client.clearTimeout(timeout)
                timeout = client.setTimeout(() => 
                    message.channel.send(++count).catch(console.error), 30000
                )
            } else if(message.member.id !== client.user.id){
                message.delete().catch(console.error)
                count = 0
                if(timeout) client.clearTimeout(timeout)
            }
        }
    })
}