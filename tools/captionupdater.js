module.exports = {UpdateCaption}
var index = 0
const statusList = [TimeStatus, PaintDry]

function UpdateCaption(client){
    status = GetNextStatus()
    client.user.setActivity(status.text,{type:status.type})
}

function GetNextStatus(){
    status = statusList[index]()
    index++
    if (index>statusList.length-1){index=0}
    return status
}

//statuses

function TimeStatus(){
    let date = new Date()
    hour = date.getHours()
    if (hour != 12){hour = hour % 12}
    meridian = "AM"
    if (date.getHours()>=12){meridian = "PM"}
    let text = `the clock -: ${hour}:${date.getMinutes()} ${meridian}!`
    let type = "WATCHING"
    return {text, type}
}

function PaintDry(){
    let type = "WATCHING"
    let text = "paint dry"
    return {text, type}
}




//types-: STREAMING: PLAYING: WATCHING: LISTENING: