module.exports = {GetRoleId}
const fs = require('fs')

var roles = null

function GetRoleId(rank){
    //ranks include-: mod, admin, owner, member.
    if (!roles){GetRolesFromJson()}
    var match = null
    roles.forEach(info=>{
        if (info.permName == rank){match = info.id}
    })
    return match;
}


function GetRolesFromJson(){
    const file = fs.readFileSync('./personal/roles.json')
    roles = JSON.parse(file)
}