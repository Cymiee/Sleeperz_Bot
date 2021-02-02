module.exports = {
    name: 'ping',
    description: "returns pong",
    execute(message, args){
        message.channel.send('pong');
    }
}
