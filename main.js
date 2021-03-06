//import libraries and files
const Discord = require('discord.js');
const fs = require('fs');
const { UpdateCaption } = require('./tools/captionupdater');

//bot info
const client = new Discord.Client();
const prefix = '-';
const token = fs.readFileSync('./personal/token.txt', 'utf-8').replace("\n", "");
const updateCaptionEveryXSeconds = 15


//import commands
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/.').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Sleeperz Bot is online!');
    UpdateCaption(client)
    setInterval(UpdateCaption, 1000*updateCaptionEveryXSeconds, client)
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (client.commands.has(command)){
        client.commands.get(command).execute(message, args, client);
    }
});


client.login(token);
