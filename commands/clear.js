const roles = require("../tools/roles.js")

module.exports = {
    name: 'clear',
    description: "clears a specified amount of bulk messages (the message you just typed is NOT included in amount)",
    execute(message, args) {
        return message.channel.send("This command dont work yet cause discord.js sucks dick")
        if (!message.member.roles.cache.has(roles.GetRoleId("admin"))){
            return message.reply("Sorry, you don't have permission to use this command.")
        }
        if (!args[0]){
            return message.reply("Please specify, as an argument, how many messages you want to clear.")
        }
        if (isNaN(args[0])){return message.reply("Please enter a valid number as an argument.")}
        if (args[0] % 1 != 0 || args[0] > 99 || args[0] < 1){return message.reply("Please enter a valid integer between 1 and 99.")}
        const deletionAmount = parseInt(args[0], 10) + 1
        
        message.channel.bulkDelete(10).then(()=>{
            console.log("MOS")
        })

        }

    }

