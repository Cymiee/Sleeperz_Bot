module.exports = {
    name: 'marco',
    description: "returns polo",
    execute(message, args){
        message.channel.send('polo');
    }
}