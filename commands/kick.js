const roles = require("../tools/roles.js")

module.exports = {
    name: 'kick',
    description: "makes poeple go bye",
    execute(message, args) {
        const member = message.mentions.users.first();
        if (message.member.roles.cache.has(roles.GetRoleId("mod")) || message.member.roles.cache.has('773809380788273153')) {
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send('User has been kicked');
            } else {
                message.channel.send('You did not mention any user');
            }
        } else {
            message.channel.send('You do not have the permission for that');
        }
    }
}
