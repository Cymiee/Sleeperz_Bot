const roles = require("../tools/roles.js")

module.exports = {
    name: 'ban',
    description: "makes poeple go bye bye",
    execute(message, args) {
        const member = message.mentions.users.first();
        if (message.member.roles.cache.has(roles.GetRoleId("admin"))){
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send('User has been banned');
            }else{
                message.channel.send('You did not mention any user');
            }
        } else {
            message.channel.send('You do not have the permission for that');
        }
    }
}
