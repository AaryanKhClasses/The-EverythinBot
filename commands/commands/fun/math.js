const { MessageEmbed } = require("discord.js")

module.exports = {
    commands: 'math',
    cooldown: 3,
    callback: (message, args) => {
       if(!args[0]){
            const embed = new MessageEmbed()
            .setDescription('<:emojino:779190801598775317> Please choose an operator and then the numbers!')
            .setColor('RED')
            .setFooter('The EverythinBot')
            .setTimestamp()
            return message.channel.send(embed)
        }

        if(args[0] === 'add' || args[0] === 'addition'){
            const num1 = +args[1]
            const num2 = +args[2]
            message.channel.send(`\`\`\`js\nThe EverythinBot Addition\nQuestion: ${num1} + ${num2}\nAnswer: ${num1 + num2}\`\`\``)
        }
        if(args[0] === 'subtract' || args[0] === 'sub'){
            const num1 = +args[1]
            const num2 = +args[2]
            message.channel.send(`\`\`\`js\nThe EverythinBot Addition\nQuestion: ${num1} - ${num2}\nAnswer: ${num1 - num2}\`\`\``)
        }
        if(args[0] === 'multiply' || args[0] === 'multiplication'){
            const num1 = +args[1]
            const num2 = +args[2]
            message.channel.send(`\`\`\`js\nThe EverythinBot Addition\nQuestion: ${num1} * ${num2}\nAnswer: ${num1 * num2}\`\`\``)
        }
        if(args[0] === 'divide' || args[0] === 'division'){
            const num1 = +args[1]
            const num2 = +args[2]
            message.channel.send(`\`\`\`js\nThe EverythinBot Addition\nQuestion: ${num1} / ${num2}\nAnswer: ${num1 / num2}\`\`\``)
        }
    }
}