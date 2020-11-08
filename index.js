require('module-alias/register')

const Discord = require('discord.js')
const client = new Discord.Client()
const { token, prefix } = require('@root/config.json')

const loadCommands = require('@root/commands/load-commands.js')
const commandBase = require('@root/commands/command-base.js')

client.on('ready', () => {
    console.log('The bot is Online!')
    client.user.setActivity(`${prefix}help`, {type: "LISTENING"}).catch(console.error)

    loadCommands(client)
    commandBase.loadPrefixes(client)
})

client.login(token)