
const Discord = require('discord.js')
const bot = new Discord.Client()
const Armor = require('./commands/Armor')
const Skill = require('./commands/Skill')
const fs = require("fs")


//Connect the bot 
bot.login('');

bot.on('message', function(msg) {
    let commandUsed = Armor.parse(msg) ||
    Skill.parse(msg); // || autres commandes
});
