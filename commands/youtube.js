module.exports = {
    name: 'youtube',
    description: "Sends the link for Cymie's YouTube Channel",
    execute(message, args) {
        const cymieLink = "https://www.youtube.com/channel/UCSOQjNYcwPRetv3hJyvZK1Q"
        const bhatiaLink = "https://www.youtube.com/channel/UCRalBrGK1wMU99nSGkOIfEw"
        if (between(0, 100) > 85){return message.channel.send(bhatiaLink)}
        return message.channel.send(cymieLink)

    }
}

function between(min, max){
    return Math.floor(
        Math.random() * (max-min+1) + min
    )
}