const Commande = require('./commande');
const Util = require('../util/utils');
const request = require("request");

module.exports = class Skill extends Commande{

    static match (msg) {
        return msg.content.startsWith('!skill');
    };

    static action (message) {
        let args = message.content.split(' ');
        args.shift(); //delete the first String : !skill
        let msg = Util.gatherString(args); //Construct a string at element.name format
        giveSkill(args,message);
    };
}

function giveSkill(skill,message){
    request("https://mhw-db.com/skills", function(error,response,body) {
        let bodyJSON = JSON.parse(body);
        bodyJSON.forEach(element => {
            if (element.name === ){
                message.channel.send(element.description);
                return;
            }
        });
        
    });
}
