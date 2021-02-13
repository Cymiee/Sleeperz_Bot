const roles = require("../tools/roles.js")

module.exports = {
    name: 'unmute',
    description: 'Makes people undumb',
    execute(message, args) {
      const target = message.mentions.users.first();
      if (!message.member.roles.cache.has(roles.GetRoleId("mod"))) {return message.reply("You don't have permission for that!")}
      if (!target) {return message.reply("Please mention a valid user.")}
      let mainRole = roles.GetRoleId("member");
      let muteRole = roles.GetRoleId("muted");
      let memberTarget = message.guild.members.cache.get(target.id);

      memberTarget.roles.add(mainRole);
      memberTarget.roles.remove(muteRole);
      return message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
    }
}
