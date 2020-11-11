const { MessageAttachment } = require("discord.js");

module.exports = {
    commands: 'changelog',
    description: 'Give the change Log',
    cooldown: 300,
    callback: (message) => {
        const attachment = new MessageAttachment('changelog.txt');
        message.channel.send(message.author, attachment);
    }
}