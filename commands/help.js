module.exports = {
    name: 'help',
    description: "Shows the commands for the bot.",
    execute(message, args, client) {
        var helpStr = "The commands for the bot are as follows-: \n\n"
        client.commands.forEach(command=>{
            helpStr += `**${command.name}**: ${command.description}\n`
        })
        message.react(client.emojis.cache.get("783320471662886923"))
        return message.reply(helpStr)
    }
}

