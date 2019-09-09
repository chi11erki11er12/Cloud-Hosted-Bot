const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjE5OTIyNTE1Njk0OTc3MDI0.XXPTQw.ulE1oXP0WitKAE8RjSiOYvO5c1w';

const PREFIX = '@';

var version = '1.0.0';

var author = 'Robert/Devrobert';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "ping":
            message.channel.sendMessage('pong!');
            break;
        case "version":
            if(args[0]){
                message.channel.sendMessage('version ' + version);
            }else{
                message.channel.sendMessage('Invalid Command Type !help for commands')
            }
            break;
        case "author":
            if(args[0]){
                message.channel.sendMessage('author ' + author);
            }else{
                message.channel.sendMessage('Invalid Command Type !help for commands')
            }
            break; 
        case 'clear':
            if(!args[1]) return message.reply('Error please define secound arg')
            message.channel.bulkDelete(args[1]);
            break;
        case 'help':
            const embed = new Discord.RichEmbed()
            .setTitle('Commands')
            .addField('!version:')
            .addField('Command creator' , message.author.username)
            .setColor('#00fff7')
            .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed);
            break;
    }
})

bot.login(token);