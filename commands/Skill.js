const Commande = require('./Command')
const Util = require('../util/Utils')
const request = require("request")

module.exports = class Skill extends Commande{

    static match (msg) {
        return msg.content.startsWith('!skill');
    };

    static action (message) {
        let args = message.content.split(' ')
        args.shift() //supprime le premier caractere : !skill
        let msg = Util.gatherString(args);
        giveSkill(msg,message);
    };
}

function giveSkill(skill,message){
    request("https://mhw-db.com/skills", function(error,response,body) {
        plop = JSON.parse(body);
        plop.forEach(element => {
            if (element.name === skill){
                message.channel.send(element.description);
                return;
            }
        });
        
    });
}

