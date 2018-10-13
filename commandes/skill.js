const Commande = require('./commande')
const request = require("request")

module.exports = class Skill extends Commande{

    static match (msg) {
        return msg.content.startsWith('!skill');
    };

    static action (message) {
        let args = message.content.split(' ')
        args.shift() //supprime le premier caractere : !
        giveSkill(args,message);
    };
}

function giveSkill(skill,message){
    request("https://mhw-db.com/skills", function(error,response,body) {
        plop = JSON.parse(body);
        plop.forEach(element => {
        console.log(element.name)
            if (element.name === ""+ skill[0]+" " + skill[1]){
                message.channel.send(element.description);
                return;
            }
        });
        
    });
}