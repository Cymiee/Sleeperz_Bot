module.exports = {
    name: 'unmute',
    desciption: 'Makes people undumb',
    execute(message, args) {
        const target = message.mentions.users.first();
        if (message.member.roles.cache.has('773808091086716958') || message.member.roles.cache.has('773809380788273153')) {
            if (target) {
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Noobs');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
            } else {
                message.channel.send('Cant find the user');
            }
        } else {
            message.channel.send('You do not have the permission for that');
        }
    }
}
