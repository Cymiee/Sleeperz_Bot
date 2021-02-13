const roles = require("../tools/roles.js")

module.exports = {
    name: 'mute',
    description: 'Makes people dumb',
    execute(message, args) {
        const target = message.mentions.members.first();
        if (!message.member.roles.cache.has(roles.GetRoleId("mod"))) {return message.reply("You don't have permission for that!")}
        if (!target) {return message.reply("Please mention a valid user.")}
        let mainRole = roles.GetRoleId("member");
        let muteRole = roles.GetRoleId("muted");
        target.roles.remove(mainRole);
        target.roles.add(muteRole);
        message.channel.send(`<@${target.user.id}> has been muted`)
    }
}
