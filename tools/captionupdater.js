module.exports = {UpdateCaption}
var index = 0
const statusList = [TimeStatus, PaintDry, JoeMama, SomeonesMom]

//const statusList = [StatusFunc]
//uncomment this to test something specific

function UpdateCaption(client){
    var randomNum = Math.floor(Math.random() * statusList.length)
    status = statusList[randomNum](client)
    client.user.setActivity(status.text,{type:status.type})
}


//statuses

function TimeStatus(client){
    let date = new Date()
    hour = date.getHours()
    if (hour != 12){hour = hour % 12}
    meridian = "AM"
    if (date.getHours()>=12){meridian = "PM"}
    minutes = date.getMinutes()
    if (minutes <= 9){minutes = '0'+minutes}
    let text = `the clock -: ${hour}:${minutes} ${meridian}!`
    let type = "WATCHING"
    return {text, type}
}

function PaintDry(client){
    let type = "WATCHING"
    let text = "paint dry"
    return {text, type}
}

function JoeMama(client){
    let type = "PLAYING"
    let text = "with joe mama"
    return {text, type}
}

function SomeonesMom(client){
    //cant fetch members cause its broken so whytf not just do it manually since its a private bot
    //guild = client.guilds.cache.get("773800384548044831");
    //var fetchedMembers = guild.members.fetch().then(fetchedMembers=>{console.log(fetchedMembers.length)})
    var fetchedMembers = ["BossSmart", "TribalAxx", "Cymie", "AJ", "Guru Ji", "rgv286", "sungchan", "1shaan", "Shadow", "durb", "Dark Lord", "Precious"]
    randomPerson = fetchedMembers[Math.floor(Math.random() * fetchedMembers.length)];
    let text = "with nobody's mom"
    if (randomPerson){text = `with ${randomPerson}'s mom`}
    let type = "PLAYING"
    return {text, type}

}




//types-: STREAMING: PLAYING: WATCHING: LISTENING: