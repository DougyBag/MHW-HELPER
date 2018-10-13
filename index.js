
const Discord = require('discord.js')
const bot = new Discord.Client()
const Armor = require('./commandes/armor')
const Skill = require('./commandes/skill')
const fs = require("fs")


//Connect the bot 
bot.login('');

bot.on('message', function(msg) {
    let commandUsed = Armor.parse(msg) ||
    Skill.parse(msg); // || autres commandes
});
